"use client"
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import "./project3.css";
import { Loader } from '@react-three/drei';

import Experience from './components/Experience';
import { UI } from './components/UI';

/**
 * 项目3主页 - 3D书籍体验
 * 使用Three.js创建3D交互式书籍展示
 */
const Project3 = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
      {/* UI界面 */}
      <UI />
      {/* 加载器 */}
      <Loader />
      {/* 3D画布 */}
      <Canvas
        shadows
        camera={{ position: [-0.5, 1, 4], fov: 45 }}
        className='bg'
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Project3