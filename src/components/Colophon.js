import React from 'react';
import { index, profile } from '../data/work';

export default function Colophon() {
  return (
    <footer className="mx-auto max-w-page px-5 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
      {/* Toolkit, set as an index rather than a wall of chips */}
      <div className="rule-t pt-4">
        <h2 className="label">Index</h2>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {index.map(([heading, items]) => (
          <div key={heading}>
            <h3 className="font-display text-lg">{heading}</h3>
            <ul className="mt-3 space-y-1">
              {items.map((item) => (
                <li key={item} className="text-[13px] leading-relaxed text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-16 rule-t pt-10 md:mt-24">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display-md max-w-[16ch]">Open to interesting problems.</h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-6 inline-block font-display text-xl md:text-2xl"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-5 md:pt-3">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline text-ink hover:text-ink"
              >
                LinkedIn
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline text-ink hover:text-ink"
              >
                GitHub
              </a>
              <a
                href={profile.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label link-underline text-ink hover:text-ink"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="label mt-16 flex flex-wrap items-baseline justify-between gap-4 rule-t pt-5">
        <span>
          {profile.name} — {profile.role}
        </span>
        <span>Set in Instrument Serif &amp; Inter</span>
        <a href="#top" className="link-underline hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
