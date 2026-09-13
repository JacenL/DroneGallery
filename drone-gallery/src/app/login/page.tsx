'use client';
import AuthShell from '@/components/auth-shell';
import LoginForm from '@/components/login';

export default function LoginPage() {
  return (
    <AuthShell title="Log in" subtitle="Use the email you signed up with.">
      <LoginForm />
    </AuthShell>
  );
}
