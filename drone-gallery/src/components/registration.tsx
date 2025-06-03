'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import Link from 'next/link';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-md p-8 rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-6 text-black">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4 text-gray-700">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input w-full p-2 border rounded"
        />
        <button type="submit" className="btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Register
        </button>

        <div className="text-center text-sm text-gray-500">or</div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Sign in with Google
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Log in here
        </Link>
      </p>
    </div>
  );
}
