import React from 'react';
import { INDIA, WORLD, project } from '../data/geo';

/**
 * A map drawn in ink on paper. Geometry is vendored Natural Earth data and the
 * projection is shared with the generator, so a place given as {lat, lng} sits
 * exactly where the coastline says it should.
 */
export default function TravelMap({ variant = 'world', places = [], label }) {
  const geo = variant === 'india' ? INDIA : WORLD;
  const vbWidth = Number(geo.viewBox.split(' ')[2]);

  const plotted = places
    .filter((p) => Number.isFinite(p.lat) && Number.isFinite(p.lng))
    .map((p) => ({ ...p, ...project(p, geo.params) }));

  // Labels are legible up to a dozen or so; past that the dots speak alone.
  const showLabels = plotted.length > 0 && plotted.length <= 14;
  const dot = variant === 'india' ? vbWidth * 0.008 : vbWidth * 0.006;
  const type = vbWidth * 0.016;

  return (
    <figure>
      <div className="rule-t rule-b py-5">
        <svg
          viewBox={geo.viewBox}
          className="h-auto w-full"
          role="img"
          aria-label={
            plotted.length
              ? `${label}: ${plotted.map((p) => p.name).join(', ')}`
              : `${label} — no places marked yet`
          }
        >
          <path
            d={geo.path}
            className="fill-paper-deep stroke-ink/40"
            strokeWidth={variant === 'india' ? 1.8 : 0.8}
            strokeLinejoin="round"
          />

          {plotted.map((place) => {
            const flip = place.x > vbWidth * 0.82; // keep labels inside the frame
            return (
              <g key={place.name}>
                <circle cx={place.x} cy={place.y} r={dot} className="fill-accent" />
                {showLabels && (
                  <text
                    x={flip ? place.x - dot * 2 : place.x + dot * 2}
                    y={place.y + type * 0.34}
                    textAnchor={flip ? 'end' : 'start'}
                    fontSize={type}
                    className="fill-ink font-sans"
                  >
                    {place.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className="label mt-3 flex items-baseline gap-3">
        <span className="text-accent">Map</span>
        <span>
          {label}
          {plotted.length > 0 && ` · ${plotted.length} ${plotted.length === 1 ? 'place' : 'places'}`}
        </span>
      </figcaption>
    </figure>
  );
}
