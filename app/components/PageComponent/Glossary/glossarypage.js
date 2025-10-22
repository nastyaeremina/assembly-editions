'use client';

import React from 'react';
import GlossarySearch from '../../glossaryhero/glossarysearch';
import StandardHero from '../../standardHero/standardHero';
import { HeroTypes } from '../../../constants/constant';
import { isEmpty } from '../../../helpers/helpers';

export default function GlossaryPage({ data, heroSectionDetail }) {
  return (
    <div className='component-wrapper'>
      {!isEmpty(heroSectionDetail) && (
        <StandardHero type={heroSectionDetail.type ?? HeroTypes.CENTER} data={heroSectionDetail} />
      )}
      <GlossarySearch data={data} />
    </div>
  );
}
