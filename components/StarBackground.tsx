"use client";

import React, { useEffect, useState } from "react";

// 星星对象接口
interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}

// 流星对象接口
interface Meteor {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}

/**
 * 星空背景组件 - 生成动态星星和流星效果
 */
const StarBackground = () => {
  // 星星数组状态
  const [stars, setStars] = useState<Star[]>([]);
  // 流星数组状态
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // 组件初始化和窗口大小变化监听
  useEffect(() => {
    generateStars();
    generateMeteors();

    // 窗口大小变化时重新生成星星
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 生成随机星星
  const generateStars = () => {
    // 根据屏幕大小计算星星数量
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // 星星大小 1-4px
        x: Math.random() * 100, // 水平位置 0-100%
        y: Math.random() * 100, // 垂直位置 0-100%
        opacity: Math.random() * 0.5 + 0.5, // 透明度 0.5-1
        animationDuration: Math.random() * 4 + 2, // 动画时长 2-6秒
      });
    }

    setStars(newStars);
  };

  // 生成随机流星
  const generateMeteors = () => {
    const numberOfMeteors = 4; // 固定4颗流星
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // 流星大小
        x: Math.random() * 100, // 水平位置
        y: Math.random() * 20, // 垂直位置（上方20%区域）
        delay: Math.random() * 15, // 动画延迟
        animationDuration: Math.random() * 3 + 3, // 动画时长 3-6秒
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 渲染星星 */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* 渲染流星 */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 1 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: `${meteor.delay}`,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
