"use client"

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// 技能数据配置
const skills = [
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 70, category: "frontend" },
  { name: "TypeScript", level: 50, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },

  { name: "Node.js", level: 50, category: "backend" },
  { name: "Convex", level: 50, category: "backend" },
  { name: "Python", level: 30, category: "backend" },

  { name: "React Native", level: 60, category: "mobile" },
  { name: "Expo", level: 60, category: "mobile" },

  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "Figma",  level: 30, category: "tools" }
];

/**
 * 技能展示区域组件 - 展示个人技能和熟练度
 */
const SkillsSection = () => {
    // 当前选中的技能分类
    const [activeCategory, setActiveCategory] = useState("all");
    // 多语言翻译函数
    const { t } = useLanguage();

    // 技能分类列表
    const categories = ["all", "frontend", "backend", "mobile", "tools"];
    // 根据选中分类过滤技能
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);


  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('skills.title')} <span className="text-primary">{t('skills.skills')}</span>
        </h2>

        {/* 技能分类筛选按钮 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground"
              )}
            >
              {t(`skills.${category}`)}
            </button>
          ))}
        </div>

        {/* 技能卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* 技能名称 */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              {/* 技能进度条 */}
              <div className="w-full h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              {/* 技能百分比 */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default SkillsSection