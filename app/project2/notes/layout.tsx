"use client";

import React from 'react'
import "../../project2/project2.css";
import { ConvexProvider, ConvexReactClient } from 'convex/react';

// 创建Convex客户端实例
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

interface NoteLayoutProps {
  children: React.ReactNode;
}

/**
 * 笔记布局组件 - 为笔记页面提供Convex数据库连接
 * 包装子组件以提供数据库访问能力
 */
const NoteLayout = (props: NoteLayoutProps) => {
  const { children } = props;

  return (
    <ConvexProvider client={convex}>
        <div>{children}</div>
    </ConvexProvider>
  );
};

export default NoteLayout;