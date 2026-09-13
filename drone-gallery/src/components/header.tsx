'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import LogoutButton from '@/components/logoutbutton';
import ThemeToggle from '@/components/theme-toggle';

type HeaderProps = {
  overlay?: boolean;
};

export default function Header({ overlay = false }: HeaderProps) {
  const { user } = useAuth();
  const name = user?.displayName || user?.email?.split('@')[0] || null;
  const [overPhoto, setOverPhoto] = useState(overlay);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setOverPhoto(window.scrollY < window.innerHeight - 64);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  const light = overlay && overPhoto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        light ? 'border-b border-white/10 bg-transparent text-white' : 'border-b border-line bg-bg/85 text-fg backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="text-sm font-medium">
          Drone Gallery
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <a
            href="/#photos"
            className={`hidden sm:inline ${light ? 'text-white/75 hover:text-white' : 'text-muted hover:text-fg'}`}
          >
            Gallery
          </a>
          <ThemeToggle />
          {name ? (
            <>
              <span className={`hidden md:inline ${light ? 'text-white/75' : 'text-muted'}`}>{name}</span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className={light ? 'text-white/75 hover:text-white' : 'text-muted hover:text-fg'}>
                Log in
              </Link>
              <Link href="/register" className={light ? 'text-white underline underline-offset-4' : 'text-fg underline underline-offset-4'}>
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
