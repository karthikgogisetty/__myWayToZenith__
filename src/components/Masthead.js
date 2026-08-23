import React, { useEffect, useState } from 'react';
import { profile } from '../data/work';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'contents', label: 'Contents' },
  { id: 'work', label: 'Work' },
  { id: 'career', label: 'Career' },
  { id: 'writing', label: 'Writing' },
];

export default function Masthead({ theme, onToggleTheme }) {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/92 backdrop-blur-sm transition-[padding] duration-300 ${
        condensed ? 'py-2' : 'py-3'
      }`}
    >
      <div className="mx-auto flex max-w-page items-baseline justify-between gap-6 px-5 md:px-10">
        <a href="#top" className="font-display text-lg leading-none md:text-xl">
          {profile.name}
        </a>

        <span className="label hidden flex-1 lg:block">
          {profile.role}, {profile.company}
        </span>

        <nav className="hidden items-baseline gap-6 md:flex">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="label link-underline hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
      <div className="mx-auto mt-2 max-w-page px-5 md:px-10">
        <div className="rule-b" />
      </div>
    </header>
  );
}
