"use client"
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import { Id } from '@/convex/_generated/dataModel'
import { Edit2, Menu, SaveAll, View, Check } from 'lucide-react'
import React, { useState, useEffect, useCallback } from 'react'
import { useLanguage } from "@/contexts/LanguageContext";

interface TopNavProps {
  isViewe: boolean
  handleToggleViewer: () => void
  handleToggleMenu: () => void
  text: string;
  currentNoteId: string | null;
  isDirty: boolean;
  isSaving: boolean;
  onNoteSaved: (savedNoteId?: string) => void;
  setSavingState: (saving: boolean) => void;
}

const TopNav = ({ isViewe, handleToggleViewer, handleToggleMenu, text, currentNoteId, isDirty, isSaving, onNoteSaved, setSavingState }: TopNavProps) => {
  const { t } = useLanguage();
  const createNote = useMutation(api.notes.createNote);
  const updateNote = useMutation(api.notes.updateNote);

  // 保存成功状态指示
  const [saveSuccess, setSaveSuccess] = useState(false);

  // 重置保存成功状态
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => {
        setSaveSuccess(false);
      }, 2000); // 2秒后隐藏成功状态
      return () => clearTimeout(timer);
    }
  }, [saveSuccess]);

  const handleSave = useCallback(async () => {
    if (!text.trim()) {
      return;
    }

    setSavingState(true);

    try {
      if (currentNoteId?.startsWith('temp_')) {
        // 创建新笔记
        const savedNoteId = await createNote({ content: text });
        onNoteSaved(savedNoteId);
        setSaveSuccess(true);
      } else if (currentNoteId) {
        // 更新现有笔记
        await updateNote({ id: currentNoteId as Id<"notes">, content: text });
        onNoteSaved();
        setSaveSuccess(true);
      }
    } catch (error) {
      console.error(t('project2.saveError'), error);
      setSavingState(false);
    }
  }, [text, setSavingState, currentNoteId, createNote, onNoteSaved, updateNote, t]);





  return (
    <>
      <div className="notes-btn">
        <button
          className="card-button-primary menu"
          onClick={handleToggleMenu}>
          <Menu size={20} />
        </button>
        <button
          className={`card-button-secondary ${isDirty ? 'dirty' : ''} ${saveSuccess ? 'save-success' : ''}`}
          onClick={handleSave}
          disabled={isSaving || !isDirty}
        >
          <h6>
            {isSaving ? t('project2.saving') :
              saveSuccess ? t('project2.saveSuccess') :
                currentNoteId?.startsWith('temp_') ? t('project2.saveNewNote') : t('project2.updateNote')}
          </h6>
          {isSaving ? (
            <SaveAll size={20} className="animate-pulse" />
          ) : saveSuccess ? (
            <Check size={20} className="text-green-500" />
          ) : (
            <SaveAll size={20} />
          )}
        </button>

        <button
          className={`card-button-secondary mode-toggle-btn ${isViewe ? 'preview-mode' : 'edit-mode'}`}
          onClick={handleToggleViewer}
        >
          {isViewe ? (
            <>
              <h6>{t('project2.edit')}</h6>
              <Edit2 size={20} />
            </>
          ) : (
            <>
              <h6>{t('project2.preview')}</h6>
              <View size={20} />
            </>
          )}
        </button>
      </div>

      <div className="full-line"></div>
    </>
  );

}

export default TopNav