import React from 'react';
import { Link } from 'react-router-dom';
import { person } from '../data/life';
import { profile } from '../data/work';

export default function PersonalColophon() {
  return (
    <footer className="mx-auto max-w-page px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <div className="rule-t pt-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display-md max-w-[16ch]">Say hello.</h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-6 inline-block font-display text-xl md:text-2xl"
            >
              {profile.email}
            </a>
          </div>

          <div className="md:col-span-5 md:pt-3">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/work" className="label link-underline text-ink hover:text-ink">
                The work
              </Link>
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
            </div>
          </div>
        </div>
      </div>

      <div className="label mt-16 flex flex-wrap items-baseline justify-between gap-4 rule-t pt-5">
        <span>{person.name}</span>
        <span>Set in Instrument Serif &amp; Inter</span>
        <a href="#top" className="link-underline hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
