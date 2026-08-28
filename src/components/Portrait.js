import React from 'react';
import { person } from '../data/life';
import Plate from './Plate';
import TK, { hasText } from './TK';

export default function Portrait() {
  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-14 pt-10 md:px-10 md:pb-24 md:pt-16">
      <div className="label flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <span>Personal</span>
        <span>{person.location}</span>
      </div>

      <div className="mt-8 grid gap-10 md:mt-12 md:grid-cols-12 md:gap-12">
        {/* Portrait */}
        <div className="md:col-span-5">
          {person.portrait ? (
            <figure>
              <div
                className="w-full overflow-hidden rule-t rule-b"
                style={{ aspectRatio: `${person.portraitW} / ${person.portraitH}` }}
              >
                <img
                  src={person.portrait}
                  alt={person.portraitAlt}
                  width={person.portraitW}
                  height={person.portraitH}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="label mt-3 flex items-baseline gap-3">
                <span className="text-accent">Portrait</span>
                <span>
                  {person.portraitIsInterim ? 'Interim — replace with a photograph' : person.name}
                </span>
              </figcaption>
            </figure>
          ) : (
            <Plate spec="Portrait · 4:5" caption="Portrait" ratio="aspect-[4/5]" priority />
          )}
        </div>

        {/* Introduction */}
        <div className="md:col-span-7 md:pt-2">
          <h1 className="display-lg">{person.name}</h1>

          {hasText(person.tagline) && (
            <p className="mt-4 font-display text-xl leading-snug text-ink-soft md:text-2xl">
              {person.tagline}
            </p>
          )}

          {person.intro.some(hasText) ? (
            <div className="measure mt-8 space-y-4">
              {person.intro.filter(hasText).map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-[15px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-8">
              <TK label="A few lines about you — send them and this fills in" />
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
