import React from 'react'
import AppCard from './appcard'

export default function AppCardSection() {
  return (
    <>
      <AppCard name={'Messaging'} applogo={'/images/menumsg.svg'} />
      <AppCard name={'Billing'} applogo={'/images/billmenuicon.svg'} />
      <AppCard name={'Files'} applogo={'/images/filemenuicon.svg'} />
      <AppCard name={'Forms'} applogo={'/images/formmenuicon.svg'} />
    </>
  );
}
