import React from 'react';
import { articles, profile } from '../data/work';
import Reveal from './Reveal';

function formatDate(value) {
  if (!value) return 'In progress';
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-page scroll-mt-24 px-5 py-14 md:px-10 md:py-24">
      <div className="rule-t pt-4">
        <h2 className="label">Writing</h2>
      </div>

      <div className="mt-8 md:mt-12">
        {articles.map((article, i) => {
          const published = Boolean(article.href);

          const body = (
            <div className="grid gap-3 py-8 md:grid-cols-12 md:gap-10">
              <p className="label md:col-span-3">{formatDate(article.date)}</p>
              <div className="md:col-span-9">
                <h3
                  className={`font-display text-2xl leading-tight md:text-3xl ${
                    published ? 'group-hover:text-accent' : ''
                  }`}
                >
                  {article.title}
                </h3>
                <p className="measure mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {article.summary}
                </p>
                {published && (
                  <span className="label mt-4 inline-block text-accent">Read on Medium →</span>
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={article.id} delay={i * 0.04}>
              {published ? (
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rule-b"
                >
                  {body}
                </a>
              ) : (
                <div className="rule-b opacity-65">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <a
        href={profile.mediumUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="label link-underline mt-8 inline-block text-ink hover:text-ink"
      >
        All essays
      </a>
    </section>
  );
}
