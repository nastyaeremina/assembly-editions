import React, { useCallback, useMemo } from 'react';
import {
  FEATURES_BILLING_ID,
  FEATURES_FILES_ID,
  FEATURES_FORMS_ID,
  FEATURES_HELPDESK_ID,
  FEATURES_MESSAG_ID
} from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import AppCard from './appcard';

export default function AppCardSection({ appsList }) {
  const renderAppView = useMemo(() => {
    if (isEmpty(appsList)) return null;
    return appsList?.map((item, index) => {
      return (
        <AppCard
          name={item?.name}
          applogo={item?.icon?.url}
          key={`copilotapps_index_${index}`}
          url={`/apps/directory/${item?.slug}`}
        />
      );
    });
  }, [appsList]);
  return <>{renderAppView}</>;
}
