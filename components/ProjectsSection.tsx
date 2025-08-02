"use client";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 项目展示区域组件 - 展示个人项目作品
 */
const ProjectsSection = () => {
  // 多语言翻译函数
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          {t('projects.title')} <span className="text-primary">{t('projects.projects')}</span>
        </h2>

        {/* 项目1: 鸡尾酒网站 */}
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[10%]">
          {/* 项目视频展示 */}
          <div className="relative flex items-center justify-center w-1/2 min-w-[400px] cursor-pointer transition-all duration-300 mix-blend-normal">
            <div className="relative flex items-center justify-center w-1/2 min-w-[400px]">
              <video
                loop
                autoPlay
                muted
                src="/project1.mp4"
                className="object-cover w-full rounded-[20px] transition-all duration-300 
                shadow-[0_0_20px_hsl(250_47%_60%)] hover:shadow-[0_0_35px_hsl(250_47%_60%)] 
                dark:shadow-[0_0_20px_hsl(250_65%_65%)] dark:hover:shadow-[0_0_35px_hsl(250_65%_65%)] hover:-translate-y-2 hover:scale-105"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </div>
          </div>

          {/* 项目信息 */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 mt-10 md:mt-5">
            <h1 className="text-[25px] font-bold text-center mb-[10px]">
              {t('projects.cocktailTitle')}
            </h1>

            <p className="text-center text-muted-foreground mt-5 max-w-[400px]">
              {t('projects.cocktailDesc')}
            </p>

            {/* 技术栈 */}
            <div className="text-xl font-bold mt-5">
              React | Tailwind | Gsap
            </div>

            {/* 项目链接 */}
            <div className="flex space-x-5 mt-5">
              <Link
                href="/project1"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLink size={24} />
              </Link>
              <Link
                href="https://github.com/ZZi0330/nextjs-resume"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* 项目2: 笔记应用 */}
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[10%] mt-25">
          {/* 项目视频展示 */}
          <div className="relative flex items-center justify-center w-1/2 min-w-[400px] cursor-pointer transition-all duration-300 mix-blend-normal">
            <div className="relative flex items-center justify-center w-1/2 min-w-[400px]">
              <video
                loop
                autoPlay
                muted
                src="/project2.mp4"
                className="object-cover w-full rounded-[20px] transition-all duration-300 
                shadow-[0_0_20px_hsl(250_47%_60%)] hover:shadow-[0_0_35px_hsl(250_47%_60%)] 
                dark:shadow-[0_0_20px_hsl(250_65%_65%)] dark:hover:shadow-[0_0_35px_hsl(250_65%_65%)] hover:-translate-y-2 hover:scale-105"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </div>
          </div>

          {/* 项目信息 */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 mt-10 md:mt-5">
            <h1 className="text-[25px] font-bold text-center mb-[10px]">
              {t('projects.notesTitle')}
            </h1>

            <p className="text-center text-muted-foreground mt-5 max-w-[400px]">
              {t('projects.notesDesc')}
            </p>

            {/* 技术栈 */}
            <div className="text-xl font-bold mt-5">
              Next.js | CSS | Convex
            </div>

            {/* 项目链接 */}
            <div className="flex space-x-5 mt-5">
              <Link
                href="/project2"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLink size={24} />
              </Link>
              <Link
                href="https://github.com/ZZi0330/nextjs-resume"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* 项目3: 3D书籍 */}
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-[10%] mt-25">
          {/* 项目视频展示 */}
          <div className="relative flex items-center justify-center w-1/2 min-w-[400px] cursor-pointer transition-all duration-300 mix-blend-normal">
            <div className="relative flex items-center justify-center w-1/2 min-w-[400px]">
              <video
                loop
                autoPlay
                muted
                src="/project3.mp4"
                className="object-cover w-full rounded-[20px] transition-all duration-300 
                shadow-[0_0_20px_hsl(250_47%_60%)] hover:shadow-[0_0_35px_hsl(250_47%_60%)] 
                dark:shadow-[0_0_20px_hsl(250_65%_65%)] dark:hover:shadow-[0_0_35px_hsl(250_65%_65%)] hover:-translate-y-2 hover:scale-105"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </div>
          </div>

          {/* 项目信息 */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 mt-10 md:mt-5">
            <h1 className="text-[25px] font-bold text-center mb-[10px]">
              {t('projects.bookTitle')}
            </h1>

            <p className="text-center text-muted-foreground mt-5 max-w-[400px]">
              {t('projects.bookDesc')}
            </p>

            {/* 技术栈 */}
            <div className="text-xl font-bold mt-5">
              React | CSS | THREE
            </div>

            {/* 项目链接 */}
            <div className="flex space-x-5 mt-5">
              <Link
                href="/project3"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <ExternalLink size={24} />
              </Link>
              <Link
                href="https://github.com/ZZi0330/nextjs-resume"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default ProjectsSection;
