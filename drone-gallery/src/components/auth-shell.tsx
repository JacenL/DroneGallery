'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import { AUTH_BACKDROP, thumbUrl } from '@/components/media';

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <main className="relative z-10 grid min-h-dvh lg:grid-cols-[1.15fr_1fr]">
      <aside className="relative hidden lg:block">
        <Image
          src={thumbUrl(AUTH_BACKDROP, 1800)}
          alt=""
          fill
          priority
          unoptimized
          sizes="55vw"
          className="object-cover"
        />
        <Link href="/" className="absolute left-8 top-8 text-sm font-medium text-white">
          Drone Gallery
        </Link>
      </aside>

      <section className="flex flex-col px-5 py-6 sm:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm text-muted hover:text-fg">
            ← Back
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium lg:hidden">Drone Gallery</span>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-sm animate-fade-up">
            <h1 className="text-3xl font-medium tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-muted">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
