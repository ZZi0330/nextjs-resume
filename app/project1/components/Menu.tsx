"use client";

import React from "react";
import Image from "next/image";
import { getAllCocktails } from "../data";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 菜单组件 - 鸡尾酒轮播展示
 * 包含导航、图片展示和详细信息
 */
const Menu = () => {
  // 获取语言和数据
  const { language, t } = useLanguage();
  const allCocktails = getAllCocktails(language);
  const contentRef = useRef<HTMLDivElement>(null);
  // 当前显示的鸡尾酒索引
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = allCocktails.length;

  // 切换动画效果
  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 100,
        ease: "power1.inOut",
      }
    );
  }, [currentIndex]);

  // 切换到指定幻灯片
  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  // 获取指定偏移位置的鸡尾酒
  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  // 当前、前一个、后一个鸡尾酒
  const currentCocktail = getCocktailAt(0);
  const previousCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient"
    >
      <Image
        src="/project1/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
        className="object-contain absolute -bottom-20 left-0 md:w-fit w-1/3"
        width={275}
        height={304}
      />
      <Image
        src="/project1/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
        className="object-contain absolute -top-40 right-0 md:w-fit w-1/4"
        width={275}
        height={304}
      />
      <h2 id="menu-heading" className="sr-only">
        {t('project1.nav.menu')}
      </h2>

      <nav
        aria-labelledby="cocktail navigation"
        className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto"
      >
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              onClick={() => goToSlide(index)}
              className={`
                md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b-1 transition-colors font-modern-negra
              ${isActive ? "text-white border-white" : "text-white/50 border-white/50"}
            `}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="flex flex-col justify-between items-center container mx-auto relative">
        <div className="flex items-center justify-between w-full absolute">
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            aria-label="Previous cocktail"
            className="
              text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36
            "
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {previousCocktail.name}
            </span>
            <Image
              src="/project1/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
              width={50}
              height={50}
            />
          </button>

          <button
            onClick={() => goToSlide(currentIndex + 1)}
            aria-label="Previous cocktail"
            className="
              text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36
            "
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {nextCocktail.name}
            </span>
            <Image
              src="/project1/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
              width={50}
              height={50}
            />
          </button>
        </div>

        <div className="flex-center mt-10 cocktail">
          <Image
            src={currentCocktail.image}
            className="
              object-contain h-[60vh]
            "
            width={500}
            height={500}
            alt={currentCocktail.name}
          />
        </div>

        <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
          <div ref={contentRef} className="space-y-4 lg:translate-y-20">
            <p>{t('project1.nav.menu')}</p>
            <p
              className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40"
              id="title"
            >
              {currentCocktail.name}
            </p>
          </div>

          <div className="space-y-5 md:max-w-md text-left details">
            <h2 className="md:text-5xl text-3xl font-serif">
              {currentCocktail.title}
            </h2>
            <p className="md:text-lg pe-5">{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
