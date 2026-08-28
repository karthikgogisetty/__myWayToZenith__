import React from 'react';
import Plate from './Plate';
import Reveal from './Reveal';
import TravelMap from './TravelMap';
import TK, { hasText } from './TK';

/** Photographs in a grid. */
function GridLayout({ chapter }) {
  return (
    <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {chapter.items.map((item, i) => (
        <Reveal key={`${chapter.id}-${i}`} delay={(i % 3) * 0.05}>
          <Plate
            src={item.image}
            alt={item.alt}
            width={item.w}
            height={item.h}
            numeral={String(i + 1)}
            spec="Photograph · 2:3"
            caption={hasText(item.title) ? item.title : `${chapter.title} ${i + 1}`}
            ratio="aspect-[2/3]"
          />
          {hasText(item.note) && (
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{item.note}</p>
          )}
        </Reveal>
      ))}
    </div>
  );
}

/** Alternating half-page spreads. */
function SpreadLayout({ chapter }) {
  return (
    <div className="mt-10 space-y-14 md:space-y-20">
      {chapter.items.map((item, i) => {
        const flipped = i % 2 === 1;
        return (
          <Reveal key={`${chapter.id}-${i}`} className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className={`md:col-span-7 ${flipped ? 'md:order-2' : ''}`}>
              <Plate
                src={item.image}
                alt={item.alt}
                numeral={String(i + 1)}
                spec="Photograph · 3:2"
                width={item.w}
                height={item.h}
                caption={hasText(item.title) ? item.title : `${chapter.title} ${i + 1}`}
                ratio="aspect-[3/2]"
              />
            </div>
            <div className={`md:col-span-5 md:pt-2 ${flipped ? 'md:order-1' : ''}`}>
              <h3 className="font-display text-2xl leading-tight md:text-3xl">{item.title}</h3>
              {hasText(item.meta) && <p className="label mt-2">{item.meta}</p>}
              {hasText(item.note) && (
                <p className="measure mt-4 text-[15px] leading-relaxed text-ink-soft">{item.note}</p>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/** A ruled list — for things that are titles and notes, not pictures. */
function ListLayout({ chapter }) {
  return (
    <div className="mt-8">
      {chapter.items.map((item, i) => (
        <Reveal key={`${chapter.id}-${i}`} delay={i * 0.04}>
          <div className="grid gap-2 rule-b py-6 md:grid-cols-12 md:gap-10">
            <p className="label md:col-span-3">
              {hasText(item.meta) ? item.meta : String(i + 1).padStart(2, '0')}
            </p>
            <div className="md:col-span-9">
              <h3 className="font-display text-xl leading-tight md:text-2xl">{item.title}</h3>
              {hasText(item.note) && (
                <p className="measure mt-2 text-[15px] leading-relaxed text-ink-soft">{item.note}</p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** World map full width, India beside the place index, spreads beneath. */
function MapLayout({ chapter }) {
  const world = chapter.world || [];
  const india = chapter.india || [];
  const empty = world.length === 0 && india.length === 0;

  return (
    <div className="mt-10">
      <Reveal>
        <TravelMap variant="world" places={world} label="World" />
      </Reveal>

      <Reveal className="mt-12 grid gap-10 md:grid-cols-12 md:items-start" delay={0.05}>
        <div className="md:col-span-5">
          <TravelMap variant="india" places={india} label="India" />
        </div>
        <div className="md:col-span-7 md:pt-8">
          <h3 className="label rule-t pt-4">Everywhere so far</h3>
          {empty ? (
            <p className="mt-4">
              <TK label="Places TK" />
            </p>
          ) : (
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {[...world, ...india].map((place) => (
                <li key={place.name} className="text-[14px] text-ink-soft">
                  <span className="mr-1.5 text-accent" aria-hidden="true">&bull;</span>
                  {place.name}
                  {place.note && <span className="text-ink-faint"> ({place.note})</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>

      {chapter.items && chapter.items.length > 0 && (
        <div className="mt-14">
          <SpreadLayout chapter={chapter} />
        </div>
      )}
    </div>
  );
}

/** Grouped shelves — cover-led cards for books, films and music. */
function GroupsLayout({ chapter }) {
  return (
    <div className="mt-10 space-y-14">
      {chapter.image && (
        <Plate
          src={chapter.image}
          alt={chapter.alt}
          width={chapter.imageW}
          height={chapter.imageH}
          caption="The shelf itself"
        />
      )}
      {chapter.groups.map((group) => (
        <div key={group.heading}>
          <div className="rule-t pt-4">
            <h3 className="label">{group.heading}</h3>
          </div>

          <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 md:gap-x-6">
            {group.items.map((item) => {
              const card = (
                <>
                  <div className="aspect-[2/3] w-full overflow-hidden rule-t rule-b bg-paper-deep">
                    {item.cover ? (
                      <img
                        src={item.cover}
                        alt={`Cover: ${item.title}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="plate-tint grid h-full w-full place-items-center p-3">
                        <span className="font-display text-center text-lg leading-tight text-ink-faint">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="mt-2.5 text-[13px] font-medium leading-snug">{item.title}</p>
                  {hasText(item.meta) && (
                    <p className="label mt-0.5 normal-case tracking-normal">{item.meta}</p>
                  )}
                </>
              );

              return (
                <li key={item.title}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block transition-colors hover:text-accent"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      {hasText(chapter.footnote) && <p className="label text-ink-faint">{chapter.footnote}</p>}
    </div>
  );
}

const LAYOUTS = {
  grid: GridLayout,
  spread: SpreadLayout,
  list: ListLayout,
  map: MapLayout,
  groups: GroupsLayout,
};

export default function Chapter({ chapter }) {
  const Layout = LAYOUTS[chapter.layout] || GridLayout;

  return (
    <section id={chapter.id} className="mx-auto max-w-page scroll-mt-24 px-5 py-14 md:px-10 md:py-24">
      <div className="rule-t pt-5">
        <div className="label flex items-baseline justify-between">
          <span>{hasText(chapter.kicker) ? chapter.kicker : chapter.title}</span>
          <span className="tabular-nums">{chapter.numeral}</span>
        </div>
      </div>

      <div className="mt-6 flex items-baseline gap-5 md:gap-8">
        <span className="font-display text-3xl leading-none text-accent md:text-5xl">
          {chapter.numeral}
        </span>
        <h2 className="display-lg">{chapter.title}</h2>
      </div>

      {hasText(chapter.intro) && (
        <p className="measure mt-6 font-display text-xl leading-snug md:text-2xl">{chapter.intro}</p>
      )}

      <Layout chapter={chapter} />
    </section>
  );
}
