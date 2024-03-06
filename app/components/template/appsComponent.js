'use client';
import React from 'react';
import { AppsSection, ListSection, Title } from './templateBodyStyle';
import AppItem from './AppItem';

export default function AppsComponent({ appsList }) {
  const renderAppList = () => {
    return appsList?.map((item, index) => {
      return (
        <AppItem
          iconUrl={item?.icon?.url}
          title={item?.name}
          link={`/apps/directory/${item?.slug}`}
          key={`app_${index}`}
        />
      );
    });
  };
  return (
    <AppsSection>
      <Title>Apps</Title>
      <ListSection>{renderAppList()}</ListSection>
    </AppsSection>
  );
}
