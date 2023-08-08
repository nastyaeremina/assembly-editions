'use client';

import React from 'react';
import GlossaryHero from '../../glossaryhero/glossaryhero';
import GlossarySearch from '../../glossaryhero/glossarysearch';

export default function GlossaryPage({ data }) {
  return (
    <>
      <GlossaryHero />
      <GlossarySearch data={data} />
    </>
  );
}
