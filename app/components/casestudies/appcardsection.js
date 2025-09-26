import React, { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import AppCard from './appcard';
import { AppsSection } from '../../styles/casestudiestyles';

export default function AppCardSection({ appsList }) {
  const renderAppView = useMemo(() => {
    if (isEmpty(appsList)) return null;
    return appsList?.map((item, index) => {
      return (
        <AppCard
          name={item?.name}
          applogo={item?.icon?.url}
          key={`assemblyapps_index_${index}`}
          url={`/apps/directory/${item?.slug}`}
        />
      );
    });
  }, [appsList]);
  return <AppsSection>{renderAppView}</AppsSection>;
}
