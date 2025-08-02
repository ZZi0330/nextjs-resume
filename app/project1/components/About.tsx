"use client";

import React from "react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 关于区域组件 - 展示鸡尾酒相关介绍和图片网格
 * 包含标题动画和图片展示
 */
const About = () => {
  const { t, language } = useLanguage();

  // 滚动动画设置
  useGSAP(() => {
    // 分割标题文字
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    // 创建滚动触发动画
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    // 标题单词动画
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      // 图片网格动画
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.04,
        },
        "-=0.5"
      );

    // 清理函数
    return () => {
      titleSplit.revert();
    };
  }, [language]); 
  return (
    <div
      id="about"
      className="container min-h-screen py-28 px-5 mx-auto 2xl:px-0"
    >
      {/* 标题和描述区域 */}
      <div className="mb-16 px-5 md:px-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* 左侧标题区域 */}
          <div className="md:col-span-8">
            <p className="inline-block px-4 py-2 mb-8 text-black text-sm font-medium bg-white rounded-full">
              {t('project1.about.tag')}
            </p>
            <h2 key={language} className="max-w-lg text-5xl font-modern-negra md:text-6xl">
              {t('project1.about.title')}<span className="text-white">{t('project1.about.titleAccent')}</span>{t('project1.about.subtitle')}
            </h2>
          </div>
          {/* 右侧描述和评分区域 */}
          <div className="flex flex-col space-y-5 justify-between md:col-span-4">
            <p className="text-lg">
              {t('project1.about.description')}
            </p>
            <div className="flex flex-col justify-between gap-5 md:gap-2">
              <p className="text-xl font-bold md:text-3xl">
                <span className="text-yellow font-bold text-5xl">{t('project1.about.rating')}</span>/5
              </p>
              <p className="text-sm text-white-100">{t('project1.about.reviews')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 上方图片网格 */}
      <div className="grid grid-cols-1 mb-5 px-5 gap-5 md:px-0 xl:grid-cols-12 top-grid">
        {[
          {
            src: "/project1/images/abt1.png",
            alt: "关于图片1",
            span: "md:col-span-3",
          },
          {
            src: "/project1/images/abt2.png",
            alt: "关于图片2",
            span: "md:col-span-6",
          },
          {
            src: "/project1/images/abt5.png",
            alt: "关于图片5",
            span: "md:col-span-3",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`overflow-hidden h-72 rounded-3xl relative ${item.span}`}
          >
            <div className="noisy">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 下方图片网格 */}
      <div className="grid grid-cols-1 px-5 gap-5 md:grid-cols-12 md:px-0 bottom-grid">
        {[
          {
            src: "/project1/images/abt3.png",
            alt: "关于图片3",
            span: "md:col-span-8",
          },
          {
            src: "/project1/images/abt4.png",
            alt: "关于图片4",
            span: "md:col-span-4",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`overflow-hidden h-72 rounded-3xl relative ${item.span}`}
          >
            <div className="noisy">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
