"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 语言切换组件 - 在中文和英文之间切换
 */
const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  // 处理语言切换点击事件
  const handleClick = () => {
    if (language === 'zh') {
      setLanguage('en');
    } else {
      setLanguage('zh');
    }
  }



  // 翻译图标SVG组件
  const EmbeddedTranslationIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 15h-1m-5 0h5m-2-1.5V15M4.857 8h4.286M4 11l1.538-5.385c.437-1.527.655-2.291.992-2.483a.95.95 0 0 1 .94 0c.337.192.555.956.992 2.483L10 11m4 9.978a5.5 5.5 0 0 0 5-5.478V15m1 5.978A5.503 5.503 0 0 1 15.6 18M14 7c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C17 8.602 17 9.068 17 10M7 15c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 18 9.068 18 10 18"
      />
    </svg>
  );

  return (
    <button className="flex items-center text-foreground hover:text-primary font-bold transition-colors duration-300 border-2 hover:border-primary rounded-2xl px-4 py-2" onClick={handleClick}>
      {/* 翻译图标 */}
      <EmbeddedTranslationIcon
        className="h-7 w-7 stroke-current"
        style={{ marginRight: '8px' }}
      />

      {/* 当前语言显示文本 */}
      <span className="inline-block w-[60px] text-left">
        {language === 'zh' ? '中文' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;