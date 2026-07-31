import React from 'react';
import { DashboardLayout } from '@/components/dashboard/dashboard-layout';

export const metadata = {
  title: 'Client Workspace | Lexocrates',
  description: 'Lexocrates Client Workspace — Legal Services Platform for law firms and corporate legal departments.',
};

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
