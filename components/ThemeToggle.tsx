'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-gray-200 dark:bg-[#1a1a1a]"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00cc66] p-1 transition-all duration-300 hover:shadow-lg"
      aria-label="Toggle theme"
    >
      <div
        className={`w-5 h-5 rounded-full bg-white dark:bg-[#050505] shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-[#00ff88]" />
        ) : (
          <Sun className="w-3 h-3 text-[#00cc66]" />
        )}
      </div>
    </button>
  );
}
