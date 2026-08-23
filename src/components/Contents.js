import React from 'react';
import { cases } from '../data/work';
import Reveal from './Reveal';

export default function Contents() {
  return (
    <section id="contents" className="mx-auto max-w-page scroll-mt-24 px-5 py-14 md:px-10 md:py-20">
      <div className="rule-t pt-4">
        <h2 className="label">Contents</h2>
      </div>

      <ol className="mt-2">
        {cases.map((entry, i) => (
          <Reveal as="li" key={entry.id} delay={i * 0.04}>
            <a
              href={`#${entry.id}`}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 rule-b py-5 transition-colors hover:text-accent md:grid-cols-[3.5rem_1fr_17rem_auto] md:gap-6"
            >
              <span className="font-display text-lg text-ink-faint group-hover:text-accent md:text-xl">
                {entry.numeral}
              </span>
              <span className="font-display text-xl leading-tight md:text-3xl">{entry.title}</span>
              <span className="label hidden md:block">{entry.subtitle}</span>
              <span className="label tabular-nums">{String(i + 1).padStart(2, '0')}</span>
            </a>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
