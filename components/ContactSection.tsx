"use client";

import { Github, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 联系我区域组件 - 展示联系信息和联系表单
 */
const ContactSection = () => {
 // 多语言翻译函数
 const { t } = useLanguage();
 
 // 处理表单提交
 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();

   // 获取表单数据
   const form = e.currentTarget;
   const name = (form.elements.namedItem("name") as HTMLInputElement).value;
   const email = (form.elements.namedItem("email") as HTMLInputElement).value;
   const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
     .value;

   // 发送邮件请求
   const res = await fetch("/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ name, email, message }),
   });

   // 处理响应结果
   if (res.ok) { 
     toast.success("✅ 信息发送成功！");
     form.reset(); 
   } else {
     toast.error("❌ 信息发送失败，请稍后重试。");
   }
 };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          {t('contact.title')} <span className="text-primary">{t('contact.touch')}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">
          {/* 左侧联系信息 */}
          <div className="p-8 bg-primary/10 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.contactInfo')}</h3>

            <div className="space-y-6 justify-center items-center mt-12">
              {/* 邮箱信息 */}
              <div className="flex space-x-4 mt-10">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">{t('contact.email')}</h4>
                  <a
                    href="mailto:1127149876@qq.com"
                    className="text-foreground hover:text-primary transition-colors break-words"
                  >
                    1127149876@qq.com
                  </a>
                </div>
              </div>

              {/* 微信信息 */}
              <div className="flex space-x-4 mt-10">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">{t('contact.weixin')}</h4>
                  <a className="text-foreground hover:text-primary transition-colors">
                    assxz2018
                  </a>
                </div>
              </div>

              {/* 位置信息 */}
              <div className="flex space-x-4 mt-10">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">{t('contact.location')}</h4>
                  <a className="text-foreground hover:text-primary transition-colors">
                    {t('contact.locationValue')}
                  </a>
                </div>
              </div>
            </div>

            {/* 社交媒体链接 */}
            <div className="p-3 pt-14">
              <div className="flex space-x-4 justify-start">
                <a
                  href="https://github.com/ZZi0330"
                  target="_blank"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* 右侧联系表单 */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">{t('contact.sendMessage')}</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* 姓名输入 */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.yourName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              {/* 邮箱输入 */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.yourEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              {/* 消息输入 */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.yourMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              {/* 提交按钮 */}
              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                <Send size={16} />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
