"use client";

import { AppWindowMac, Code, User } from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 关于我区域组件 - 展示个人介绍和技能服务
 */
const AboutSection = () => {
  // 多语言翻译函数
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('about.title')} <span className="text-primary">{t('about.me')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* 左侧文字介绍 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t('about.subtitle')}
            </h3>

            <p className="text-muted-foreground">
              {t('about.description1')}
            </p>

            <p className="text-muted-foreground">
              {t('about.description2')}
            </p>

            {/* 联系按钮 */}
            <div className="flex flex-col items-center gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {t('about.getInTouch')}
              </a>
            </div>
          </div>

          {/* 右侧服务卡片 */}
          <div className="grid grid-cols-1 gap-6">
            {/* 网页开发服务 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-6">
                <div className="flex items-center gap-6 justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary justify-center items-center" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{t('about.webDev')}</h4>
                    <p className="text-muted-foreground">
                      {t('about.webDevDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 应用开发服务 */}
            <div className="gradient-border p-6 card-hover">
               <div className="flex flex-row items-center gap-6">
                <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                  <AppWindowMac className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t('about.appDev')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.appDevDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX设计服务 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-row items-center gap-6">
                <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t('about.uiux')}</h4>
                  <p className="text-muted-foreground">
                    {t('about.uiuxDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection