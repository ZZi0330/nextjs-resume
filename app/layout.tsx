import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClientLanguageHandler from "@/components/ClientLanguageHandler";

// 配置 Geist 字体
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 网站元数据配置
export const metadata: Metadata = {
  title: "My Resume Web",
  description: "Welcome My Resume Web",
  icons: {
    icon: '/logo.png',
  }
};

/**
 * 根布局组件 - 整个应用的最外层布局
 * 包含字体配置、语言提供者、主题设置等全局配置
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {/* 客户端语言处理器 */}
          <ClientLanguageHandler />
          {/* 全局消息提示 */}
          <Toaster position="top-center" />
          {/* 页面内容 */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
 