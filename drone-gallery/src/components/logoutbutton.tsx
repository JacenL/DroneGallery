'use client';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';
import { SpinnerIcon } from '@/components/icons';

export default function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleLogout = async () => {
    setPending(true);
    try {
      await signOut(auth);
      router.push('/login');
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={pending}
      className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg disabled:opacity-60"
    >
      {pending ? <SpinnerIcon className="size-3.5" /> : null}
      Log out
    </button>
  );
}
