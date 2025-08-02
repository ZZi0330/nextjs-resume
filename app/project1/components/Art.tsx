"use client";

import React from "react";
import { getFeatureLists, getGoodLists } from "../data";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 艺术区域组件 - 展示鸡尾酒制作工艺和特色
 * 包含遮罩动画效果和特色列表
 */
const Art = () => {
    // 获取语言和翻译数据
    const { language, t } = useLanguage();
    const goodLists = getGoodLists(language);
    const featureLists = getFeatureLists(language);
    // 移动端检测
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // 遮罩动画设置
    useGSAP(() => {
      const start = isMobile ? "top 20%" : "top top";
      const maskTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#art",
          start,
          end: "bottom center",
          scrub: 1.5,
          pin: true,
        },
      });

      // 遮罩动画序列
      maskTimeline
        // 淡出特色列表
        .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
        // 放大并显示遮罩图片
        .to(".masked-img", {
          scale: 1.3,
          maskPosition: "center",
          maskSize: "400%",
          duration: 1,
          ease: "power1.inOut",
        })
        // 显示遮罩内容
        .to("#masked-content", {
          opacity: 1,
          duration: 1,
          ease: "power1.inOut",
        });
    });
    
  return (
    <div
      id="art"
      className="flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient"
    >
      <div className="container h-full mx-auto pt-20">
        {/* 艺术标题 */}
        <h2 className="relative md:text-[20vw] text-6xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8 md:mt-14">
          {t('project1.artTitle')}
        </h2>
        
        <div className="flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
          {/* 左侧优点列表 */}
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/project1/images/check.png"
                  width={20}
                  height={20}
                  alt="勾选图标"
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {/* 中央遮罩图片 */}
          <div className="md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <Image
              src="/project1/images/under-img.jpg"
              width={1200}
              height={800}
              alt="鸡尾酒图片"
              className="object-contain abs-center masked-img"
            />
          </div>

          {/* 右侧特色列表 */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li
                key={index}
                className=" flex
                  items-center justify-start gap-2"
              >
                <Image
                  src="/project1/images/check.png"
                  width={20}
                  height={20}
                  alt="勾选图标"
                />
                <p className="w-60 md:w-fit">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 底部标题和遮罩内容 */}
        <div className="text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32">
          <h2 className="will-fade">{t('project1.perfectChoice')}</h2>
          {/* 遮罩显示的内容 */}
          <div
            id="masked-content"
            className="opacity-0 md:px-0 px-5 space-y-5 absolute md:bottom-5 bottom-52 left-1/2 -translate-x-1/2"
          >
            <h3 className="md:text-5xl text-2xl text-center font-serif md:w-full w-80 text-white">
              {t('project1.craftTitle')}
            </h3>
            <p className="text-lg text-center">
              {t('project1.craftDescription')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
