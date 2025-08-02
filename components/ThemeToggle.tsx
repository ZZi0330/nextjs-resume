"use client"

import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils"

/**
 * 主题切换组件 - 在夜色模式和浅色模式之间切换
 */
const ThemeToggle = () => {
  // 夜色模式状态
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 组件初始化时设置主题
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // 默认为夜色模式，只有明确设置为 light 时才使用浅色模式
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // 默认夜色模式
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // 切换主题函数
  const toggleTheme = () => {
    if (isDarkMode) {
      // 切换到浅色模式
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // 切换到夜色模式
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <div>
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed max-sm:hidden top-5 z-50 p-3 rounded-full transition-colors duration-300",
          "focus:outline-hidden"
        )}
      >
        {/* 根据当前主题显示对应图标 */}
        {isDarkMode ? (
          <Sun className="h-7 w-7 text-yellow-300" />
        ) : (
        <Moon className="h-7 w-7 text-blue-900" />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle