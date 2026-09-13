'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import Link from 'next/link';
import { Button, Divider, ErrorMessage, Field, GoogleButton, friendlyAuthError } from '@/components/form';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pending, setPending] = useState<'email' | 'google' | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setPending('email');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (err: unknown) {
            setError(friendlyAuthError(err));
            setPending(null);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setPending('google');
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            router.push('/');
        } catch (err: unknown) {
            setError(friendlyAuthError(err));
            setPending(null);
        }
    };

    return (
        <div className="space-y-5">
            <GoogleButton onClick={handleGoogleLogin} loading={pending === 'google'} />

            <Divider />

            <form onSubmit={handleLogin} className="space-y-4">
                <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Field
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <ErrorMessage message={error} />

                <Button type="submit" loading={pending === 'email'}>
                    Log in
                </Button>
            </form>

            <p className="text-center text-sm text-muted">
                New here?{' '}
                <Link href="/register" className="font-medium text-fg underline-offset-4 hover:underline">
                    Create an account
                </Link>
            </p>
        </div>
    );
}
