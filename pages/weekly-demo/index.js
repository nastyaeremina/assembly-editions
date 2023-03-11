import React from 'react';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { Container } from '../../components/weeklyhero/styles';
import WeeklyHero from '../../components/weeklyhero/weeklyhero';

export default function WeeklyDemo() {
  return (
    <Container>
      <Layout>
        <Navbar />
        <WeeklyHero />
      </Layout>
    </Container>
  );
}
