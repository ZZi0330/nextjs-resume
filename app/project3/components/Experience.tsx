
import React from 'react'
import Book from './Book'
import { Environment, Float, OrbitControls } from '@react-three/drei'

/**
 * 3D体验组件 - 设置3D场景和书籍展示
 * 包含浮动效果、环境光照和阴影
 */
const Experience = () => {
    return (
        <>
        {/* 浮动书籍 */}
        <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={1}
        rotationIntensity={1.5}
        >
           <Book />  
        </Float>
           
        {/* 轨道控制器 */}
        <OrbitControls />
        {/* 环境光照 */}
        <Environment preset='studio' />
        
        {/* 方向光源 */}
        <directionalLight
            position={[2, 5, 2]}
            intensity={2.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
        />
        
        {/* 地面阴影接收器 */}
        <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]}/>
        <shadowMaterial transparent opacity={0.2}/>
        </mesh>
        </>
    )
}

export default Experience