import React from 'react';

/**
 * An image slot.
 *
 * With a `src` it renders the photograph. Without one it renders a composed
 * "for position only" plate — ruled tint, crop marks, numeral and a spec line —
 * so an unfilled layout reads as a print layout awaiting art, not as a broken
 * frame. Drop an image in and the scaffolding disappears.
 */

function CropMarks() {
  const corners = [
    'left-0 top-0 border-l border-t',
    'right-0 top-0 border-r border-t',
    'left-0 bottom-0 border-l border-b',
    'right-0 bottom-0 border-r border-b',
  ];

  return (
    <>
      {corners.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute h-5 w-5 border-ink-faint/45 ${position}`}
        />
      ))}
    </>
  );
}

export default function Plate({
  src,
  alt = '',
  numeral,
  caption,
  spec,
  ratio = 'aspect-[3/2]',
  width,
  height,
  className = '',
  priority = false,
}) {
  // Real dimensions win over the placeholder ratio, so a photograph is shown
  // whole rather than cropped into a frame that was guessed before it existed.
  const natural = width && height ? { aspectRatio: `${width} / ${height}` } : undefined;

  return (
    <figure className={`relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden ${natural ? '' : ratio} rule-t rule-b`}
        style={natural}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="plate-tint absolute inset-0">
            <CropMarks />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              {numeral && (
                <span
                  aria-hidden="true"
                  className="font-display leading-none text-ink-faint/40"
                  style={{ fontSize: 'clamp(2.75rem, 8vw, 6.5rem)' }}
                >
                  {numeral}
                </span>
              )}
              {spec && <span className="label text-ink-faint/80">{spec}</span>}
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="label mt-3 flex items-baseline gap-3">
          <span className="text-accent">{src ? 'Fig.' : 'Plate'}</span>
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
