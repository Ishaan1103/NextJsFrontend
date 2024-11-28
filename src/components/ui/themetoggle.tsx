// ThemeToggle.tsx
'use client';

import { useTheme } from "@/context/themecontext";
import { CgSun } from "react-icons/cg";
import { RxMoon } from "react-icons/rx";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  console.log('Current theme:', theme);  // Debugging log

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-white transition flex items-center justify-center"
    >
      {theme === 'light' ? (
        <span className="text-yellow-500">
          <CgSun className="text-2xl" />
        </span>
      ) : (
        <span className="text-yellow-500">
          <RxMoon className="text-2xl" />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
