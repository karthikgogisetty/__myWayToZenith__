import React from 'react';
import Masthead from './components/Masthead';
import Cover from './components/Cover';
import Contents from './components/Contents';
import Work from './components/Work';
import Career from './components/Career';
import Writing from './components/Writing';
import Colophon from './components/Colophon';
import useTheme from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <Masthead theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Cover />
        <Contents />
        <Work />
        <Career />
        <Writing />
      </main>

      <Colophon />
    </div>
  );
}
