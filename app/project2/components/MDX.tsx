"use client"
import React from 'react'
import TopNav from './TopNav'
import Markdown from 'markdown-to-jsx'
import { useLanguage } from "@/contexts/LanguageContext";


interface MDXProps {
  text: string;
  isViewe: boolean;
  handleToggleViewer: () => void;
  setText: (text: string) => void; 
  handleToggleMenu: () => void;
  currentNoteId: string | null;
  isDirty: boolean;
  isSaving: boolean;
  onNoteSaved: (savedNoteId?: string) => void;
  setSavingState: (saving: boolean) => void;
}


const MDX = (props: MDXProps) => {
  const { t } = useLanguage();
  const {text, isViewe, handleToggleViewer, handleToggleMenu, currentNoteId, isDirty, isSaving, onNoteSaved, setSavingState} = props


  return (
   <section className='mdx-container preview-mode'>
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
    <article>
      <Markdown>
        {text.trim() || t('project2.startWriting')}
      </Markdown>
    </article>

   </section>
  )
}

export default MDX