import '@styles/globals.css';
import { UserDashboard } from '@/components';

export default async function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserDashboard>{children}</UserDashboard>;
}
