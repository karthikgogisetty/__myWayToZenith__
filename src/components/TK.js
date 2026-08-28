import React from 'react';

/**
 * Printing shorthand for copy still to come. Renders a small marker where text
 * is missing, so an unwritten page reads as a draft in progress rather than as
 * a bug — and so nothing is ever invented to fill the gap.
 */
export default function TK({ children, label = 'Copy TK' }) {
  if (children && String(children).trim()) return <>{children}</>;

  return (
    <span className="label inline-block border border-dashed border-ink-faint/50 px-2 py-0.5 text-ink-faint/80">
      {label}
    </span>
  );
}

export function hasText(value) {
  return Boolean(value && String(value).trim());
}
