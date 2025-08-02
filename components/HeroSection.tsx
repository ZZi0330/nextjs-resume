"use client";

import Image from "next/image";
import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 首页英雄区域组件 - 展示个人头像和介绍信息
 */
const HeroSection = () => {
  // 多语言翻译函数
  const { t } = useLanguage();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:justify-between"
    >
      {/* 个人头像区域 */}
      <div className="flex-shrink-0 mb-8 md:mb-0 flex justify-center w-full md:w-1/2">
        <Image
          src="/My.jpeg"
          alt="个人头像"
          width={300}
          height={300}
          className="cursor-pointer rounded-full transition-all duration-300 hover:-translate-y-5 hover:scale-105 shadow-xl shadow-primary hover:shadow-2xl opacity-0 animate-fade-in-delay-1 object-cover w-50 h-50 sm:w-56 sm:h-56 md:w-72 md:h-72"
        />
      </div>

      {/* 文字介绍区域 */}
      <div className="w-full md:w-1/2 max-w-3xl mx-auto text-center md:text-left z-10">
        <div className="space-y-6">
          {/* 标题文字 - 分段动画效果 */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t('hero.greeting')}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              {t('hero.name')}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              {t('hero.lastName')}
            </span>
          </h1>

          {/* 描述文字 */}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {t('hero.description')}
          </p>

          {/* 行动按钮 */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <div className="flex items-center justify-center md:justify-start">
              <a href="#projects" className="cosmic-button">
                {t('hero.viewWork')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="scroll-indicator" />
      </div>
    </section>
  );
};

export default HeroSection;
