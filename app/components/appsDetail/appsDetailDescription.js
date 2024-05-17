'use client';
import React from 'react';
import RichTextDetail from '../richTextDetail/richText';
import { AboutDescription, AppDetailContent } from './styles';
export default function AppsDetailDescription({ assets = [], jsonData }) {
  return (
    <>
      <AboutDescription>
        <AppDetailContent>
          <RichTextDetail data={jsonData} assets={assets} />
        </AppDetailContent>
      </AboutDescription>
    </>
  );
}
