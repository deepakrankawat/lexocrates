# 1. Base Image
# Using alpine for minimal footprint
FROM node:20-alpine AS base

# 2. Dependencies Stage
# Install dependencies only when package.json or package-lock.json change
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f58d921159b216560381667086055497d0fd1/alpine#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 3. Build Stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry for faster, private builds
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# 4. Production Stage
# Final stage: minimal image size
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the necessary files for the standalone build
# This is the key to reducing size significantly
COPY --from=builder /app/public ./public

# Set permissions during copy to avoid extra layers
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Use server.js created by Next.js standalone mode
CMD ["node", "server.js"]
