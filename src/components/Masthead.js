import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { chapters, person } from '../data/life';
import ThemeToggle from './ThemeToggle';

const WORK_LINKS = [
  { id: 'contents', label: 'Contents' },
  { id: 'work', label: 'Work' },
  { id: 'career', label: 'Career' },
  { id: 'writing', label: 'Writing' },
];

export default function Masthead({ theme, onToggleTheme }) {
  const [condensed, setCondensed] = useState(false);
  const { pathname } = useLocation();
  const onWork = pathname === '/work';

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On the personal page the chapters are the sections; on work, its own set.
  const sections = onWork
    ? WORK_LINKS
    : chapters.map((c, i) => ({
        id: c.id,
        label: c.title,
        // The last two only appear once there is room for them.
        className: i >= 4 ? 'hidden xl:inline' : '',
      }));

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/92 backdrop-blur-sm transition-[padding] duration-300 ${
        condensed ? 'py-2' : 'py-3'
      }`}
    >
      <div className="mx-auto flex max-w-page items-baseline justify-between gap-6 px-5 md:px-10">
        <Link to="/" className="font-display text-lg leading-none md:text-xl">
          {person.name}
        </Link>

        <nav className="hidden flex-1 items-baseline gap-6 lg:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`label link-underline hover:text-ink ${section.className || ''}`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-baseline gap-5">
          {/* The one route switch. Personal is home; work lives behind this. */}
          <NavLink
            to={onWork ? '/' : '/work'}
            className="label link-underline text-ink hover:text-ink"
          >
            {onWork ? 'Personal' : 'Work'}
          </NavLink>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
      <div className="mx-auto mt-2 max-w-page px-5 md:px-10">
        <div className="rule-b" />
      </div>
    </header>
  );
}
