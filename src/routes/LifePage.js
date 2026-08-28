import React from 'react';
import Portrait from '../components/Portrait';
import Chapter from '../components/Chapter';
import PersonalColophon from '../components/PersonalColophon';
import { chapters } from '../data/life';

export default function LifePage() {
  return (
    <>
      <Portrait />
      {chapters.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}
      <PersonalColophon />
    </>
  );
}
