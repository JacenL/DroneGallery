'use client';
import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-2xl bg-blue-300 text-gray-800 font-medium shadow-sm hover:bg-blue-400 hover:shadow-md transition duration-200"
    >
      Log Out
    </button>
  );
}
