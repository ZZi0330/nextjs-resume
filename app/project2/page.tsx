"use client";

import React from "react";
import Login from "./components/Login";
import "../project2/project2.css";
import Image from "next/image";

/**
 * 项目2主页 - 笔记应用登录页
 * 包含背景图片和登录组件
 */
const Project2 = () => {
  return (
    <main id="app">
      <div className="hero">
        {/* 背景图片 */}
        <div className="hero-img">
          <Image
            src="/project2/hero-img.jpeg"
            alt="笔记应用背景图"
            width={1536}
            height={1024}
          />
        </div>

        {/* 登录组件 */}
        <Login />
      </div>
    </main>
  );
};

export default Project2;
