import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Awalnya, cek apakah localStorage tersedia dan ada pengaturan
  useEffect(() => {
    // Pastikan ini berjalan di client, tidak di server
    setMounted(true);
    
    // Cek apakah sudah ada tema tersimpan
    const savedTheme = localStorage.getItem("theme");
    
    // Jika ada tema tersimpan, terapkan
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!mounted) return <>{children}</>;
  
  return children;
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Handler untuk toggle tema
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
      onClick={toggleTheme}
      title={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">
        {isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
      </span>
    </Button>
  );
}
