'use client';
import AuthShell from '@/components/auth-shell';
import RegisterForm from '@/components/registration';

export default function RegisterPage() {
  return (
    <AuthShell title="Create an account" subtitle="Email and a password is enough.">
      <RegisterForm />
    </AuthShell>
  );
}
