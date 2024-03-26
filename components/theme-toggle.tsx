'use client';

import { IoSunny } from 'react-icons/io5';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const onThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className="dark:bg-gray-600 dark:hover:bg-gray-600/70 hover:bg-gray-200 duration-200 bg-gray-200/70 p-3 rounded-full text-[22px] cursor-pointer"
      onClick={onThemeToggle}
    >
      <span className="dark:hidden flex">
        <IoSunny />
      </span>
      <span className="dark:flex hidden">
        <FaMoon />
      </span>
    </div>
  );
};
