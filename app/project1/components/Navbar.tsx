"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getNavLinksArray } from "../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 项目1导航栏组件 - 鸡尾酒网站导航
 * 包含logo和导航链接，支持多语言
 */
const Navbar = () => {
  // 获取当前语言和导航链接
  const { language } = useLanguage();
  const navLinks = getNavLinksArray(language);
  // 组件挂载状态
  const [mounted, setMounted] = useState(false);

  // 设置组件已挂载
  useEffect(() => {
    setMounted(true);
  }, []);

  // 导航栏滚动动画
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    // 滚动时改变导航栏背景
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav
      className="
        z-50
        w-full
        fixed
      "
    >
      <div
        className="
          flex flex-col container
          py-5 px-5 mx-auto
          items-center gap-5
          md:flex-row md:justify-between
          lg:px-0
        "
      >
        {/* Logo区域 */}
        <a
          href="#home"
          className="
            flex
            text-nowrap text-sm
            cursor-pointer
            items-center justify-center gap-2
            md:text-base
          "
        >
          <Image
            src="/project1/images/logo.png"
            alt="网站logo"
            width={40}
            height={40}
          />

          <p
            className="
              text-3xl
              -mb-2
            "
          >
            {/* 根据语言显示不同的品牌名 */}
            {mounted ? (language === 'zh' ? '调酒' : 'Cocktail') : '调酒'}
          </p>
        </a>

        {/* 导航链接列表 */}
        <ul className="flex-center lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="cursor-pointer text-nowrap md:text-base text-sm">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
