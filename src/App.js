import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Masthead from './components/Masthead';
import LifePage from './routes/LifePage';
import WorkPage from './routes/WorkPage';
import useTheme from './hooks/useTheme';

const TITLES = {
  '/': 'Karthik Gogisetty',
  '/life': 'Karthik Gogisetty',
  '/work': 'Karthik Gogisetty — Selected Work',
};

/** Anchor links handle their own scrolling; a route change should start at the top. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || 'Karthik Gogisetty';
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

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

      <ScrollToTop />
      <Masthead theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<LifePage />} />
          <Route path="/life" element={<LifePage />} />
          <Route path="/work" element={<WorkPage />} />
          {/* Unknown paths fall back to the personal page rather than a dead end. */}
          <Route path="*" element={<LifePage />} />
        </Routes>
      </main>
    </div>
  );
}
