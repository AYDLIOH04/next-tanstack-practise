import Link from 'next/link';
import { ThemeToggle } from '@/components';

export const Header = () => {
  return (
    <header className="px-5 w-full h-16 dark:bg-gray-600 bg-gray-200 flex items-center justify-between">
      <nav className="flex flex-row items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/todos">Todos</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};
