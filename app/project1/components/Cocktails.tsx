"use client";

import React from "react";
import Image from "next/image";
import { getCocktailLists, getMockTailLists } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 鸡尾酒列表组件 - 展示鸡尾酒和无酒精鸡尾酒菜单
 * 包含价格和描述信息
 */
const Cocktails = () => {
  // 获取语言和数据
  const { language, t } = useLanguage();
  const cocktailLists = getCocktailLists(language);
  const mockTailLists = getMockTailLists(language);
  
  // 叶子装饰动画
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
        },
      })
      .from("#c-left-leaf", { x: -100, y: 100 })
      .from("#c-right-leaf", { x: 100, y: 100 });
  });

  // 渲染鸡尾酒列表项
  const renderList = (list: typeof cocktailLists) =>
    list.map(({ name, country, detail, price }) => (
      <li key={name} className="flex justify-between items-start">
        <div className="md:me-28">
          <h3 className="font-modern-negra text-xl text-yellow 2xl:text-3xl">
            {name}
          </h3>
          <p className="text-sm">
            {country} | {detail}
          </p>
        </div>
        <span className="text-xl font-medium">- {price}</span>
      </li>
    ));

  return (
    <section
      id="cocktails"
      className="overflow-hidden min-h-dvh w-full noisy relative"
    >
      {/* 左侧叶子装饰 */}
      <Image
        src="/project1/images/hero-left-leaf.png"
        alt="左侧叶子装饰"
        width={0}
        height={0}
        id="c-left-leaf"
        sizes="100vw"
        priority
        className="w-1/3 absolute left-0 -top-20 md:w-fit md:bottom-0 md:top-auto"
      />
      {/* 右侧叶子装饰 */}
      <Image
        src="/project1/images/hero-right-leaf.png"
        alt="右侧叶子装饰"
        width={0}
        height={0}
        id="c-right-leaf"
        sizes="100vw"
        priority
        className="w-1/3 absolute right-0 -top-20 md:w-fit md:bottom-0 md:top-auto"
      />

      <div className="container z-10 flex flex-col md:flex-row mx-auto pt-40 px-5 2xl:px-0 relative justify-between items-start gap-20">
        {/* 鸡尾酒列表 */}
        <div className="w-full md:w-fit space-y-8">
          <h2 className="text-xl font-medium">{t('project1.cocktailsTitle')}</h2>
          <ul className="space-y-8">{renderList(cocktailLists)}</ul>
        </div>
        {/* 无酒精鸡尾酒列表 */}
        <div className="w-full md:w-fit space-y-8 pb-20 md:pb-0">
          <h2 className="text-xl font-medium">{t('project1.mockTailsTitle')}</h2>
          <ul className="space-y-8">{renderList(mockTailLists)}</ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
