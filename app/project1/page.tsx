"use client";

import React from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import "../project1/project1.css";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

// 注册GSAP插件
gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * 项目1主页 - 鸡尾酒网站
 * 包含导航、英雄区域、鸡尾酒展示、关于、艺术、菜单、联系等区域
 */
const Project1 = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />    {/* 导航栏 */}
      <Hero />      {/* 英雄区域 */}
      <Cocktails /> {/* 鸡尾酒展示 */}
      <About />     {/* 关于区域 */}
      <Art />       {/* 艺术区域 */}
      <Menu />      {/* 菜单区域 */}
      <Contact />   {/* 联系区域 */}
    </main>
  );
};

export default Project1;
 