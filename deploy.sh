#!/usr/bin/env bash

set -Eeuo pipefail

PROJECT_DIR="/opt/apps/lexocrates"
BRANCH="main"
HEALTH_URL="http://127.0.0.1:3000/api/health"

cd "$PROJECT_DIR"

# Parse arguments
LOCAL_ONLY=false
for arg in "$@"; do
    if [ "$arg" = "--local" ]; then
        LOCAL_ONLY=true
    fi
done

if [ "$LOCAL_ONLY" = true ]; then
    echo "Local-only deployment: skipping git fetch and reset."
else
    echo "Fetching latest code..."
    git fetch origin "$BRANCH"
    git reset --hard "origin/$BRANCH"

    if [ ! -f "docker-compose.yml" ]; then
        git checkout HEAD@{1} -- docker-compose.yml 2>/dev/null || git checkout f7fcde2 -- docker-compose.yml 2>/dev/null || true
    fi
    if [ ! -f "src/app/api/health/route.ts" ]; then
        mkdir -p src/app/api/health
        git checkout HEAD@{1} -- src/app/api/health/route.ts 2>/dev/null || git checkout f7fcde2 -- src/app/api/health/route.ts 2>/dev/null || true
    fi
fi

echo "Building Docker image..."
docker-compose build --pull

echo "Starting updated container..."
docker-compose up -d --remove-orphans

echo "Waiting for application health check..."

for attempt in {1..20}; do
    if curl --fail --silent "$HEALTH_URL" >/dev/null; then
        echo "Application is healthy."
        docker-compose ps
        docker image prune -f
        exit 0
    fi

    sleep 5
done

echo "Deployment failed because the application did not become healthy."
docker-compose ps
docker-compose logs --tail=200
exit 1
