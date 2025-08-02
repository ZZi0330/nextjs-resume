"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/lib/i18n';

// 语言上下文类型定义
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * 语言提供者组件 - 管理全局语言状态和翻译功能
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // 语言状态，默认中文
  const [language, setLanguage] = useState<Language>('zh');

  // 客户端初始化：加载保存的语言设置或检测浏览器语言
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      // 使用保存的语言设置
      setLanguage(savedLanguage);
    } else {
      // 检测浏览器语言
      const browserLanguage = navigator.language || navigator.languages[0];
      const detectedLanguage = browserLanguage.startsWith('zh') ? 'zh' : 'en';
      setLanguage(detectedLanguage);
      localStorage.setItem('language', detectedLanguage);
    }
  }, []);

  // 设置语言并保存到本地存储
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // 翻译函数 - 根据键值获取对应语言的文本
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    // 逐级访问嵌套对象
    for (const k of keys) {
      value = value?.[k];
    }

    // 返回翻译文本或原键值（如果未找到翻译）
    return (typeof value === 'string' ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * 语言Hook - 获取语言上下文
 * 必须在LanguageProvider内部使用
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};