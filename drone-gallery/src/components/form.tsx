'use client';

import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { GoogleIcon, SpinnerIcon } from '@/components/icons';

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function Field({ label, id, className = '', ...props }: FieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm text-fg">{label}</span>
      <input
        id={id}
        className={`w-full rounded-sm border border-line bg-card px-3 py-2 text-sm text-fg placeholder:text-muted focus:border-fg focus:outline-none ${className}`}
        {...props}
      />
    </label>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};

export function Button({
  loading = false,
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-inverse text-on-inverse hover:opacity-90'
      : 'border border-line bg-card text-fg hover:bg-fg/6';

  return (
    <button
      disabled={disabled || loading}
      className={`relative inline-flex w-full items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 ${styles} ${className}`}
      {...props}
    >
      {loading ? <SpinnerIcon className="size-4" /> : null}
      {children}
    </button>
  );
}

export function GoogleButton({ loading, ...props }: Omit<ButtonProps, 'variant' | 'children'>) {
  return (
    <Button variant="secondary" loading={loading} {...props}>
      {!loading ? <GoogleIcon className="size-4" /> : null}
      Continue with Google
    </Button>
  );
}

export function Divider({ label = 'or' }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted">
      <span className="h-px flex-1 bg-line" />
      {label}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

export function ErrorMessage({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-800 dark:text-red-200">
      {message}
    </p>
  );
}

export function friendlyAuthError(err: unknown): string {
  const code = (err as { code?: string })?.code ?? '';
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Incorrect email or password.';
    case 'auth/invalid-email':
      return 'That email doesn’t look right.';
    case 'auth/email-already-in-use':
      return 'An account with that email already exists.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Wait a minute and try again.';
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return 'Sign-in was cancelled.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.';
    default:
      return err instanceof Error ? err.message : 'Something went wrong. Try again.';
  }
}
