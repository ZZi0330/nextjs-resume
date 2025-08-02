"use client";

import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, OpeningHour } from "@/lib/i18n";

/**
 * 联系区域组件 - 展示联系信息和营业时间
 * 包含地址、电话、微信和营业时间
 */
const Contact = () => {
  // 获取语言和营业时间数据
  const { t, language } = useLanguage();
  const openingHours = translations[language]?.project1?.openingHours || translations.zh.project1.openingHours;

  // 联系区域动画
  useGSAP(() => {
    // 分割标题文字
    const titleSplit = SplitText.create("#contact h2", {
      type: "words",
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline
      // 标题单词动画
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      // 其他文本动画
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      // 右侧叶子动画
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      // 左侧叶子动画
      .to(
        "#f-left-leaf",
        {
          y: "50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <footer
      id="contact"
      className="relative md:mt-20 mt-0 px-4 text-center w-full overflow-hidden radial-gradient"
    >
      {/* 右侧叶子装饰 */}
      <Image
        src="/project1/images/footer-right-leaf.png"
        alt="右侧叶子装饰"
        id="f-right-leaf"
        className="absolute top-0 right-0 pointer-events-none hidden lg:block"
        width={308}
        height={319}
      />
      {/* 左侧叶子装饰 */}
      <Image
        src="/project1/images/footer-left-leaf.png"
        alt="左侧叶子装饰"
        id="f-left-leaf"
        className="absolute bottom-0 left-0 pointer-events-none lg:w-fit w-1/3"
        width={308}
        height={319}
      />
      
      <div className="container mx-auto lg:py-14 2xl:py-32 py-16 flex flex-col justify-between gap-10 min-h-dvh">
        {/* 主标题 */}
        <h2 className="lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5">
          {t('project1.contact.title')}
        </h2>
        {/* 地址信息 */}
        <p className="lg:text-2xl 2xl:text-3xl text-sm">{t('project1.contact.address')}</p>

        {/* 联系方式 */}
        <div>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">
            {t('project1.contact.contactUs')}
          </h3>
          <p className="lg:text-2xl 2xl:text-3xl text-sm">
            {t('project1.contact.phone')}
          </p>
          <p className="lg:text-2xl 2xl:text-3xl text-sm">{t('project1.contact.wechat')}</p>
        </div>

        {/* 营业时间 */}
        <div>
          <h3 className="uppercase xl:text-base 2xl:text-lg text-base mb-2">
            {t('project1.contact.openingHours')}
          </h3>
          {openingHours.map((item: OpeningHour, index: number) => (
            <p className="lg:text-2xl 2xl:text-3xl text-sm" key={index}>
              {item.day}: {item.time}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
