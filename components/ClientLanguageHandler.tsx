"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 客户端语言处理器组件
 * 负责在客户端动态更新HTML的lang属性
 * 这是一个无渲染组件，仅处理副作用
 */
const ClientLanguageHandler = () => {
  const { language } = useLanguage();

  // 监听语言变化，更新HTML的lang属性
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  // 不渲染任何内容
  return null;
};

export default ClientLanguageHandler;