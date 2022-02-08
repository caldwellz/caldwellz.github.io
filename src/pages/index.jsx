import React from 'react';

import Layout from '../components/Layout';
import Section from '../components/Section';

const IndexPage = () => {
  return (
    <Layout>
      <Section id='home' bgColor='var(--bs-primary)' color='var(--bs-light)' />
      <Section title='About Me' />
      <Section title='My Portfolio' />
      <Section title='My Résumé' id='my-resume' />
      <Section title='Contact Me' />
    </Layout>
  );
};

export default IndexPage;
