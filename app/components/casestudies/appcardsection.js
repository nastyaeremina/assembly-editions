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

export default function AppCardSection({ copilotAppList, appsList }) {
  const generateUrl = useCallback((sysId) => {
    switch (sysId) {
      case FEATURES_BILLING_ID:
        return '/features/billing-app';
      case FEATURES_MESSAG_ID:
        return '/features/messaging-app';
      case FEATURES_FILES_ID:
        return '/features/files-app';
      case FEATURES_FORMS_ID:
        return '/features/forms-app';
      case FEATURES_HELPDESK_ID:
        return '/features/helpdesk-app';
      default:
        return '';
    }
  }, []);
  const renderCopilotappView = useMemo(() => {
    if (isEmpty(copilotAppList)) return null;
    return copilotAppList?.map((item, index) => {
      return (
        <AppCard
          name={item?.name}
          applogo={item?.featureIcon?.url}
          key={`copilotapps_index_${index}`}
          url={generateUrl(item?.sys?.id)}
        />
      );
    });
  }, [copilotAppList, generateUrl]);

  const renderAppView = useMemo(() => {
    if (isEmpty(appsList)) return null;
    return appsList?.map((item, index) => {
      return (
        <AppCard
          name={item?.name}
          applogo={item?.icon?.url}
          key={`copilotapps_index_${index}`}
          url={`/apps/${item?.slug}`}
        />
      );
    });
  }, [appsList]);
  return (
    <>
      {renderCopilotappView}
      {renderAppView}
    </>
  );
}
