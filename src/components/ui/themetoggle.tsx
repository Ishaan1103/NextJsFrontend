'use client';
import { useTheme } from "@/context/themecontext";
import { CgSun } from "react-icons/cg";
import { RxMoon } from "react-icons/rx";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-white transition flex items-center justify-center"
    >
      {theme === 'light' ? (
        <span className="text-yellow-500 "><CgSun className="size-8" /></span> 
      ) : (
        <span className="text-yellow-500 "><RxMoon className="size-8"/></span> 
      )}
    </button>
  );
};

export default ThemeToggle;
