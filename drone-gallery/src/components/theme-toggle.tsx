'use client';

import { MoonIcon, SunIcon } from '@/components/icons';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`grid size-8 place-items-center rounded-full transition ${
        dark ? 'bg-[#f3d48a] text-[#3d2a0a]' : 'bg-[#1b2433] text-[#dce7f2]'
      }`}
    >
      {dark ? <SunIcon className="size-3.5" /> : <MoonIcon className="size-3.5" />}
    </button>
  );
}
