"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * 英雄区域组件 - 鸡尾酒网站首页主视觉区域
 * 包含标题动画、背景视频和装饰元素
 */
const Hero = () => {
  // 视频引用
  const videoRef = useRef<HTMLVideoElement>(null);
  // 移动端检测
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // 多语言翻译
  const { t } = useLanguage();

  // GSAP动画设置
  useGSAP(() => {
    // 分割标题和副标题文字
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // 为标题字符添加渐变样式
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // 标题字符动画
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    // 副标题行动画
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    // 叶子装饰元素滚动动画
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    // 视频滚动控制动画
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: isMobile ? "top 50%" : "center 60%",
        end: isMobile ? "120% top" : "bottom top",
        scrub: true,
        pin: true,
      },
    });

    // 视频加载完成后设置时间轴控制
    videoRef.current!.onloadedmetadata = () => {
      if (videoRef.current?.duration) {
        tl.to(videoRef.current, {
          currentTime: videoRef.current.duration,
        });
      }
    };
  }, []);

  return (
    <>
      {/* 英雄区域主体 */}
      <section
        id="hero"
        className="z-10 min-h-dvh w-full border border-transparent relative noisy"
      >
        {/* 主标题 */}
        <h1 className="mt-45 text-8xl leading-none text-center title md:mt-40 md:text-[15vw]">
          {t('project1.hero.title')}
        </h1>

        {/* 左侧叶子装饰 */}
        <Image
          src="/project1/images/hero-left-leaf.png"
          alt="左侧叶子装饰"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-1/3 left-leaf absolute left-0 -bottom-20 md:w-fit md:top-20 md:bottom-auto xl:top-36 2xl:top-52"
        />
        
        {/* 右侧叶子装饰 */}
        <Image
          src="/project1/images/hero-right-leaf.png"
          alt="右侧叶子装饰"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-24 right-leaf absolute right-0 top-1/2 md:w-fit md:bottom-0 xl:top-0 2xl:top-12"
        />

        {/* 内容区域 */}
        <div className="container flex mx-auto px-5 absolute left-1/2 -translate-x-1/2 top-auto justify-between items-end md:top-[30vh] lg:bottom-20">
          <div className="flex flex-col w-full mx-auto gap-10 justify-between items-center lg:flex-row lg:items-end">
            {/* 左侧副标题区域 */}
            <div className="hidden space-y-5 md:block">
              <p className="text-center subtitle 2xl:text-start">
                {t('project1.hero.subtitle')}
              </p>
              <p className="max-w-xl text-6xl text-yellow">{t('project1.hero.description')}</p>
            </div>

            {/* 右侧描述和按钮区域 */}
            <div className="w-full space-y-5 text-lg md:max-w-xs lg:max-w-2xs">
              <p className="mt-4 text-left">
                {t('project1.hero.content')}
              </p>
              <a
                href="#cocktails"
                className="font-semibold text-center opacity-80 hover:text-yellow 2xl:text-start"
              >
                {t('project1.hero.viewCocktails')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 背景视频 */}
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/project1/videos/output.mp4"
          className="object-bottom object-cover w-full h-1/2 absolute bottom-0 left-0 md:object-contain md:h-[80%]"
        />
      </div>
    </>
  );
};

export default Hero;
