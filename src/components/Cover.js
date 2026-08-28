import React from 'react';
import { cover, profile } from '../data/work';
import Plate from './Plate';

export default function Cover() {
  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      {/* Issue line */}
      <div className="label flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <span>{cover.kicker}</span>
        <span>{profile.years}</span>
        <span className="hidden sm:inline">{profile.location}</span>
      </div>

      <h1 className="display-xl mt-6 max-w-[13ch] animate-fade-up md:mt-10">
        {cover.title}
      </h1>

      <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:gap-10">
        <p className="font-display text-2xl leading-snug text-ink md:col-span-7 md:text-[2rem]">
          {cover.standfirst}
        </p>

        <div className="md:col-span-5 md:pt-2">
          <p className="measure text-[15px] leading-relaxed text-ink-soft">{profile.summary}</p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="label link-underline text-ink hover:text-ink"
            >
              Email
            </a>
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

      <Plate
        src={cover.image}
        alt={cover.alt}
        width={cover.w}
        height={cover.h}
        spec="Lead figure · 21:9"
        caption="Cover — the six systems as one pipeline"
        ratio="aspect-[2/1] md:aspect-[21/9]"
        priority
        className="mt-12 md:mt-16"
      />
    </section>
  );
}
