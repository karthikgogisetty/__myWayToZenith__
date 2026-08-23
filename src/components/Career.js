import React from 'react';
import { experience } from '../data/work';
import Reveal from './Reveal';

export default function Career() {
  return (
    <section id="career" className="mx-auto max-w-page scroll-mt-24 px-5 py-14 md:px-10 md:py-24">
      <div className="rule-t pt-4">
        <h2 className="label">Career</h2>
      </div>

      <div className="mt-8 md:mt-12">
        {experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={i * 0.04}>
            <div className="grid gap-4 rule-b py-8 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <p className="label">{role.period}</p>
                <p className="mt-1 text-sm text-ink-soft">{role.company}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-2xl leading-tight md:text-3xl">{role.role}</h3>
                <p className="mt-2 text-[15px] text-ink-soft">{role.summary}</p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2 sm:gap-x-8">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="grid grid-cols-[0.75rem_1fr] gap-2 text-[14px] leading-relaxed text-ink"
                    >
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
