"use client";

import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { Id } from '@/convex/_generated/dataModel';
import { ArrowBigRightIcon, Plus, Trash2 } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface SideNavProps {
  showNav: boolean;
  setShowNav: (showNav: boolean) => void;
  text: string;
  currentNoteId: string | null;
  isDirty: boolean;
  createNewNote: () => void;
  loadNote: (noteId: string, content: string) => void;
  lastUpdateTime: number;
}


const SideNav = (props: SideNavProps) => {
  const router = useRouter();
  const { t } = useLanguage();
  const handleLogout = () => {
  localStorage.removeItem("authToken");
  
  router.push("/project2/");
}
  const notes = useQuery(api.notes.getNotes) ?? []
  const deleteNoteMutation = useMutation(api.notes.deleteNote);

  const { showNav, setShowNav, text, currentNoteId, isDirty, createNewNote, loadNote, lastUpdateTime } = props

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        setShowNav(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setShowNav])

  // 处理新建笔记按钮点击 - 创建新的编辑状态而不是直接保存
  const handleCreateNewNote = () => {
    createNewNote();
    // 在移动端关闭侧边栏
    if (window.innerWidth < 768) {
      setShowNav(false);
    }
  }

  // 处理点击已保存笔记 - 加载到编辑器
  const handleLoadNote = (noteId: string, content: string) => {
    // 如果当前有未保存的更改，提示用户
    if (isDirty && currentNoteId !== noteId) {
      if (confirm(t('project2.switchNoteConfirm'))) {
        loadNote(noteId, content);
      }
    } else {
      loadNote(noteId, content);
    }
    
    // 在移动端关闭侧边栏
    if (window.innerWidth < 768) {
      setShowNav(false);
    }
  }

  // 删除笔记的处理函数
  const handleDeleteNote = async (noteId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // 防止触发父元素的点击事件
    
    if (confirm(t('project2.deleteConfirm'))) {
      try {
        await deleteNoteMutation({ id: noteId as Id<"notes"> });
        
        // 如果删除的是当前正在编辑的笔记，创建新笔记
        if (currentNoteId === noteId) {
          createNewNote();
        }
      } catch (error) {
        console.error('删除笔记失败:', error);
        alert(t('project2.deleteError'));
      }
    }
  }

  // 提取笔记标题（从内容首行提取，最多30个字符）
  const extractTitle = (content: string): string => {
    if (!content || !content.trim()) {
      return t('project2.untitledNote');
    }
    
    // 移除markdown标记符号，获取纯文本
    const cleanContent = content
      .replace(/^#+\s*/, '') // 移除标题标记
      .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体标记
      .replace(/\*(.*?)\*/g, '$1') // 移除斜体标记
      .replace(/`(.*?)`/g, '$1') // 移除代码标记
      .trim();
    
    const firstLine = cleanContent.split('\n')[0].trim();
    if (firstLine.length === 0) {
      // 如果第一行为空，尝试获取第二行
      const secondLine = cleanContent.split('\n')[1]?.trim();
      if (secondLine && secondLine.length > 0) {
        return secondLine.length > 30 ? secondLine.substring(0, 30) + '...' : secondLine;
      }
      return t('project2.untitledNote');
    }
    
    return firstLine.length > 30 ? firstLine.substring(0, 30) + '...' : firstLine;
  }

  // 格式化时间显示
  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = (now.getTime() - date.getTime()) / (1000 * 60);
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    
    if (diffInMinutes < 1) {
      return t('project2.justNow');
    } else if (diffInMinutes < 60) {
      return `${Math.floor(diffInMinutes)}${t('project2.minutesAgo')}`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}${t('project2.hoursAgo')}`;
    } else if (diffInDays < 7) {
      return `${Math.floor(diffInDays)}${t('project2.daysAgo')}`;
    } else if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)}${t('project2.weeksAgo')}`;
    } else {
      const locale = t('project2.title') === '记录' ? 'zh-CN' : 'en-US';
      return date.toLocaleDateString(locale, { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }
  }

  return (
    <section ref={ref} className={'nav ' + (showNav ? '' : 'hidden-nav')}>
      <h1 className='text-gradient'>{t('project2.title')}</h1>
      <h6>{t('project2.simpleNotes')}</h6>
      <div className='full-line'></div>
      <button onClick={handleCreateNewNote}>
        <h6>{t('project2.newNote')}</h6>
        <Plus size={20} />
      </button>
      <div className='notes-list'>
        {/* 显示当前正在编辑的临时笔记 */}
        {currentNoteId?.startsWith('temp_') && (
          <button className="card-button-secondary list-btn editing-note active-note">
            <div className="note-content">
              <p className="note-title">
                {text.trim() ? extractTitle(text) : t('project2.newNoteEditing')}
                {isDirty && <span className="dirty-indicator"> •</span>}
              </p>
              <small className="note-time">
                {text.trim() ? 
                  `${formatTime(lastUpdateTime)} ${isDirty ? t('project2.unsaved') : t('project2.synced')} • ${text.length}${t('project2.characters')}` : 
                  t('project2.startTyping')
                }
              </small>
              {text.trim() && text.length > 50 && (
                <small className="note-preview">
                  {text.substring(0, 80).replace(/\n/g, ' ')}...
                </small>
              )}
            </div>
          </button>
        )}
        
        {notes.length === 0 ? <p>{t('project2.noNotes')}</p> : notes.map((note) => {
          const isCurrentNote = currentNoteId === note._id;
          const title = extractTitle(note.content);
          // 使用 updatedAt 如果存在，否则使用 createdAt
          const displayTime = note.updatedAt || note.createdAt;
          const timeDisplay = formatTime(displayTime);
          
          return (
            <button 
              key={note._id} 
              className={`card-button-secondary list-btn ${isCurrentNote ? 'active-note' : ''}`}
              onClick={() => handleLoadNote(note._id, note.content)}
            >
              <div className="note-content">
                <p className="note-title">{title}</p>
                <small className="note-time">
                  {timeDisplay}
                  {note.updatedAt && note.updatedAt !== note.createdAt && ` ${t('project2.edited')}`}
                </small>
                {/* 显示内容预览（如果内容较长） */}
                {note.content.length > 100 && (
                  <small className="note-preview">
                    {note.content.substring(0, 80).replace(/\n/g, ' ')}...
                  </small>
                )}
              </div>
              <div 
                className="delete-btn"
                onClick={(e) => handleDeleteNote(note._id, e)}
                title={t('project2.deleteNote')}
              >
                <Trash2 size={16} />
              </div>
            </button>
          );
        })}
      </div>
      <div className='full-line'></div>
      <button onClick={handleLogout}>
        <h6>{t('project2.logout')}</h6>
        <ArrowBigRightIcon size={20} />
      </button>

    </section>
  )
}

export default SideNav