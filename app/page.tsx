import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

/**
 * 主页组件 - 个人简历网站首页
 * 包含导航栏、星空背景和各个功能区域
 */
export default function Home() {
  return (
    <div className="root">
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        {/* 导航栏 */}
        <Navbar />
        {/* 星空背景 */}
        <StarBackground />
        {/* 主要内容区域 */}
        <main>
          <HeroSection />     {/* 英雄区域 */}
          <AboutSection />    {/* 关于我区域 */}
          <SkillsSection />   {/* 技能展示区域 */}
          <ProjectsSection /> {/* 项目展示区域 */}
          <ContactSection />  {/* 联系我区域 */}
        </main>
      </div>
    </div>
  );
}
