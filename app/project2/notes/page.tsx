"use client";

import React from "react";
import SideNav from "../components/SideNav";
import Editor from "../components/Editor";
import MDX from "../components/MDX";
import { useState, useCallback, useRef } from "react";

/**
 * 笔记页面组件 - 笔记应用的主要界面
 * 包含侧边导航、编辑器和预览组件
 */
const NptesPage = () => {
  // 视图状态：true为预览模式，false为编辑模式
  const [isViewe, setIsViewe] = useState(true);
  // 笔记文本内容
  const [text, setText] = useState('')
  // 侧边导航显示状态
  const [showNav, setShowNav] = useState(false)
  
  // 笔记状态管理
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null); // 当前笔记ID
  const [isDirty, setIsDirty] = useState(false); // 是否有未保存的更改
  const [isSaving, setIsSaving] = useState(false); // 是否正在保存
  const [originalText, setOriginalText] = useState(''); // 原始文本，用于比较是否有更改
  
  // 最后更新时间引用
  const lastUpdateRef = useRef<number>(Date.now());

  // 生成临时ID
  const generateTempId = useCallback(() => {
    return `temp_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  }, []);

  // 处理文本变化
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
    setIsDirty(newText !== originalText);
    lastUpdateRef.current = Date.now();
  }, [originalText]);

  // 创建新笔记
  const createNewNote = useCallback(() => {
    const tempId = generateTempId();
    setCurrentNoteId(tempId);
    setText('');
    setOriginalText('');
    setIsDirty(false);
    setIsViewe(false);
  }, [generateTempId]);

  // 加载现有笔记
  const loadNote = useCallback((noteId: string, content: string) => {
    setCurrentNoteId(noteId);
    setText(content);
    setOriginalText(content);
    setIsDirty(false);
    setIsViewe(true);
  }, []);

  // 笔记保存完成回调
  const handleNoteSaved = useCallback((savedNoteId?: string) => {
    if (savedNoteId && currentNoteId?.startsWith('temp_')) {
      setCurrentNoteId(savedNoteId);
    }
    setOriginalText(text);
    setIsDirty(false);
    setIsSaving(false);
  }, [currentNoteId, text]);

  // 设置保存状态
  const setSavingState = useCallback((saving: boolean) => {
    setIsSaving(saving);
  }, []);

  // 切换预览/编辑模式
  const handleToggleViewer = useCallback(() => {
    setIsViewe(!isViewe);
  }, [isViewe]);

  // 切换侧边菜单
  const handleToggleMenu = () => {
    setShowNav(!showNav)
  }

  return (
    <main id="notes">
      {/* 侧边导航 */}
      <SideNav 
        showNav={showNav} 
        setShowNav={setShowNav} 
        text={text} 
        currentNoteId={currentNoteId}
        isDirty={isDirty}
        createNewNote={createNewNote}
        loadNote={loadNote}
        lastUpdateTime={lastUpdateRef.current}
      />
      
      {/* 编辑模式 */}
      {!isViewe && (
        <Editor 
          setText={handleTextChange} 
          text={text} 
          isViewe={isViewe} 
          handleToggleViewer={handleToggleViewer} 
          handleToggleMenu={handleToggleMenu}
          currentNoteId={currentNoteId}
          isDirty={isDirty}
          isSaving={isSaving}
          onNoteSaved={handleNoteSaved}
          setSavingState={setSavingState}
        />
      )}
      
      {/* 预览模式 */}
      {isViewe && (
        <MDX 
          text={text} 
          setText={handleTextChange} 
          isViewe={isViewe} 
          handleToggleViewer={handleToggleViewer} 
          handleToggleMenu={handleToggleMenu}
          currentNoteId={currentNoteId}
          isDirty={isDirty}
          isSaving={isSaving}
          onNoteSaved={handleNoteSaved}
          setSavingState={setSavingState}
        />
      )}
    </main>
  );
};

export default NptesPage;
