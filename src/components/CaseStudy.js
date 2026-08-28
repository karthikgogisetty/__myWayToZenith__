import React from 'react';
import Plate from './Plate';
import Reveal from './Reveal';

/**
 * One case study. Plates alternate side on wide screens so the sequence reads
 * like facing pages rather than a stack of identical cards.
 */
export default function CaseStudy({ entry, index }) {
  const flipped = index % 2 === 1;

  return (
    <article id={entry.id} className="scroll-mt-24 py-14 md:py-24">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <div className="rule-t pt-5">
          <div className="label flex items-baseline justify-between">
            <span>{entry.subtitle}</span>
            <span className="tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="mt-6 flex items-baseline gap-5 md:gap-8">
          <span className="font-display text-3xl leading-none text-accent md:text-5xl">
            {entry.numeral}
          </span>
          <h2 className="display-lg">{entry.title}</h2>
        </div>

        <Reveal className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-x-10">
          {/* Plate */}
          <div className={`md:col-span-7 ${flipped ? 'md:order-2' : ''}`}>
            <Plate
              src={entry.image}
              alt={entry.alt}
              width={entry.w}
              height={entry.h}
              numeral={entry.numeral}
              spec="Figure · 4:3"
              caption={`${entry.numeral} — ${entry.title}`}
              ratio="aspect-[4/3]"
            />
          </div>

          {/* Text column */}
          <div className={`md:col-span-5 ${flipped ? 'md:order-1' : ''}`}>
            <p className="font-display text-xl leading-snug md:text-2xl">{entry.standfirst}</p>

            {entry.body.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 32)}
                className={`mt-5 text-[15px] leading-relaxed text-ink-soft ${
                  i === 0 ? 'dropcap' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}

            <dl className="mt-8 rule-t pt-5">
              {entry.facts.map(([term, value]) => (
                <div key={term} className="grid grid-cols-[5.5rem_1fr] gap-4 py-1.5">
                  <dt className="label">{term}</dt>
                  <dd className="text-[13px] leading-relaxed text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
