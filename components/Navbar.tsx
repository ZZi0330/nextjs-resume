"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import gsap from 'gsap';

/**
 * 导航栏组件 - 包含菜单项、语言切换和主题切换功能
 */
const Navbar = () => {
  // 移动端菜单开关状态
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 多语言翻译函数
  const { t } = useLanguage();

  // 移动端菜单引用
  const menuRef = useRef(null)
  // 菜单项引用数组
  const menuItemsRef = useRef([])

  // 初始化菜单项引用
  useEffect(() => {
    menuItemsRef.current = Array.from(document.querySelectorAll(".menu-item"))
  }, [])

  // 处理移动端菜单动画
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        // 打开菜单动画
        gsap.to(menuRef.current, {
          opacity: 1,
          x: 0,
          display: "flex",
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(menuRef.current, { pointerEvents: "auto" })
          }
        })
      } else {
        // 关闭菜单动画
        gsap.to(menuRef.current, {
          opacity: 0,
          x: "100%",
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(menuRef.current, { pointerEvents: "none" })
          }
        })
      }
    }
  }, [isMenuOpen])

  // 导航菜单项配置
  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  // 切换移动端菜单显示状态
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <nav
      className=
      "fixed w-full z-40 transition-all bg-background/80 duration-300 px-4 md:px-16 md:py-6"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* 桌面端导航菜单 */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground font-bold hover:text-primary transition-colors duration-300 border-2 hover:border-primary rounded-2xl px-4 py-2"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 桌面端控制按钮组 */}
        <div className='hidden md:flex gap-5 items-center'>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* 移动端菜单按钮 */}
        <div
          onClick={toggleMenu}
          className='md:hidden cursor-pointer'
        >
          <Menu className='w-8 h-8 z-10 absolute right-8 top-6' />
        </div>

        {/* 移动端侧边菜单 */}
        <div ref={menuRef} className="fixed top-0 right-0 bottom-0 bg-background/90 p-20 z-50 shadow-lg flex flex-col items-center transform translate-x-full opacity-0 pointer-events-none">
          {/* 关闭按钮 */}
          <button onClick={toggleMenu} className="absolute items-center top-10">
            <X className="w-8 h-8" />
          </button>

          {/* 移动端菜单项 */}
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="flex flex-col text-foreground font-bold hover:text-primary transition-colors duration-300 border-2 hover:border-primary rounded-2xl px-4 py-2 mt-15 text-2xl"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar