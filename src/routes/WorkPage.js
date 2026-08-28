import React from 'react';
import Cover from '../components/Cover';
import Contents from '../components/Contents';
import Work from '../components/Work';
import Career from '../components/Career';
import Writing from '../components/Writing';
import Colophon from '../components/Colophon';

export default function WorkPage() {
  return (
    <>
      <Cover />
      <Contents />
      <Work />
      <Career />
      <Writing />
      <Colophon />
    </>
  );
}
