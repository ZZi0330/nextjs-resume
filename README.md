# 个人简历网站 | Personal Resume Website

[中文](#中文) | [English](#english)

---

## 中文

### 项目简介

这是一个基于 Next.js 15 的现代化个人简历网站，采用响应式设计，支持中英双语切换和夜色/浅色主题切换。网站包含个人简历展示和三个精选项目展示。

### ✨ 主要特性

- 🌟 **现代化设计**: 采用星空背景和流畅动画效果
- 🌍 **多语言支持**: 自动检测浏览器语言，支持中英文切换
- 🌙 **主题切换**: 默认夜色模式，支持浅色/夜色主题切换
- 📱 **响应式设计**: 完美适配桌面端和移动端
- ⚡ **性能优化**: 使用 Next.js 15 和 TypeScript 构建
- 🎨 **精美动画**: 集成 GSAP 动画库，提供流畅的用户体验

### 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义CSS
- **动画**: GSAP
- **图标**: Lucide React
- **数据库**: Convex (用于笔记项目)
- **部署**: Vercel

### 📁 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── project1/          # 鸡尾酒网站项目
│   ├── project2/          # 笔记应用项目
│   ├── project3/          # 3D书籍项目
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/            # 全局共享组件
├── contexts/              # React 上下文
├── lib/                   # 工具函数和配置
└── public/                # 静态资源文件
```

### 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone [项目地址]
   cd resume-next
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问网站**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 📋 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 代码格式检查

### 🎯 项目展示

1. **鸡尾酒网站** (`/project1`)
   - 精美的动画鸡尾酒展示网站
   - 技术栈: React + Tailwind CSS + GSAP

2. **笔记应用** (`/project2`)
   - 支持实时数据同步的笔记应用
   - 技术栈: Next.js + CSS + Convex

3. **3D体验书** (`/project3`)
   - 创新的3D交互式阅读体验
   - 技术栈: React + CSS + THREE.js

### 🌐 部署

项目已配置 Vercel 自动部署，推送到主分支即可自动部署。

---

## English

### Project Overview

A modern personal resume website built with Next.js 15, featuring responsive design, bilingual support (Chinese/English), and dark/light theme switching. The website includes personal resume display and three featured project showcases.

### ✨ Key Features

- 🌟 **Modern Design**: Starry background with smooth animations
- 🌍 **Multilingual Support**: Auto-detect browser language, supports Chinese/English switching
- 🌙 **Theme Toggle**: Default dark mode with light/dark theme switching
- 📱 **Responsive Design**: Perfect adaptation for desktop and mobile
- ⚡ **Performance Optimized**: Built with Next.js 15 and TypeScript
- 🎨 **Beautiful Animations**: Integrated GSAP animation library for smooth user experience

### 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: GSAP
- **Icons**: Lucide React
- **Database**: Convex (for notes project)
- **Deployment**: Vercel

### 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── project1/          # Cocktail website project
│   ├── project2/          # Notes application project
│   ├── project3/          # 3D book project
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Global shared components
├── contexts/              # React contexts
├── lib/                   # Utility functions and configurations
└── public/                # Static assets
```

### 🚀 Getting Started

1. **Clone the project**
   ```bash
   git clone [project-url]
   cd resume-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the website**
   Open your browser and visit [http://localhost:3000](http://localhost:3000)

### 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Code linting

### 🎯 Project Showcase

1. **Cocktail Website** (`/project1`)
   - Beautiful animated cocktail showcase website
   - Tech Stack: React + Tailwind CSS + GSAP

2. **Notes Application** (`/project2`)
   - Note-taking app with real-time data synchronization
   - Tech Stack: Next.js + CSS + Convex

3. **3D Experience Book** (`/project3`)
   - Innovative 3D interactive reading experience
   - Tech Stack: React + CSS + THREE.js

### 🌐 Deployment

The project is configured for automatic Vercel deployment. Push to the main branch for automatic deployment.

---

### 📄 License

This project is for personal use and portfolio demonstration.

### 📧 Contact

- Email: 1127149876@qq.com
- WeChat: assxz2018
- GitHub: [ZZi0330](https://github.com/ZZi0330)