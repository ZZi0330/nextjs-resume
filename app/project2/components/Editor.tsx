"use client"
import React from 'react'
import TopNav from './TopNav';
import { useLanguage } from "@/contexts/LanguageContext";


interface EditorProps {
  text: string;
  setText: (text: string) => void;
  isViewe: boolean;
  handleToggleViewer: () => void;
  handleToggleMenu: () => void;
  currentNoteId: string | null;
  isDirty: boolean;
  isSaving: boolean;
  onNoteSaved: (savedNoteId?: string) => void;
  setSavingState: (saving: boolean) => void;
}


const Editor = (props: EditorProps) => {
  const { t } = useLanguage();
  const { text, setText, isViewe, handleToggleViewer, handleToggleMenu, currentNoteId, isDirty, isSaving, onNoteSaved, setSavingState } = props


  return (
    <section className="notes-container edit-mode">
      <TopNav
        isViewe={isViewe}
        handleToggleViewer={handleToggleViewer}
        handleToggleMenu={handleToggleMenu}
        text={text}
        currentNoteId={currentNoteId}
        isDirty={isDirty}
        isSaving={isSaving}
        onNoteSaved={onNoteSaved}
        setSavingState={setSavingState}
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t('project2.placeholder')}
      />
    </section>
  );
}

export default Editor