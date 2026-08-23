import React from 'react';
import { cases } from '../data/work';
import CaseStudy from './CaseStudy';

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24">
      {cases.map((entry, index) => (
        <CaseStudy key={entry.id} entry={entry} index={index} />
      ))}
    </section>
  );
}
