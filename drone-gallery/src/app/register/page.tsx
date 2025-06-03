'use client';
import RegisterForm from '@/components/registration';

export default function RegisterPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <RegisterForm />
    </main>
  );
}
