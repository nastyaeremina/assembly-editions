'use client';

import { useEffect } from 'react';
import { isEmpty } from '../../helpers/helpers';

export default function Analytics({ experimentName, contentLabel }) {
  useEffect(() => {
    
    if ( !isEmpty(experimentName) && !isEmpty(contentLabel)&& typeof window !== 'undefined') {
      if (window.analytics && window.analytics.identify) {
        const eventName = `ab_${experimentName}`;
        window.analytics.identify({ [eventName]: contentLabel });
      }
    }
  }, [experimentName, contentLabel]);

  return null;
} 