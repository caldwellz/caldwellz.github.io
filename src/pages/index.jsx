import React from 'react';

import AspectedFrame from '../components/AspectedFrame';
import Layout from '../components/Layout';
import Section from '../components/Section';

import ResumeLinks from '../data/ResumeLinks';

const IndexPage = () => {
  return (
    <Layout>
      <Section id='home' bgColor='var(--bs-primary)' color='var(--bs-light)' />
      <Section title='About Me' />
      <Section title='My Portfolio' />
      <Section title='My Résumé' id='my-resume'>
        <AspectedFrame title='Zach`s Resumé' src={ResumeLinks.getPreview('PDF')}>
          <p className='text-center'>
            View below or download{' '}
            <a href={ResumeLinks.getDownload('PDF')}>
              as a PDF
            </a>
            {' '}or{' '}
            <a href={ResumeLinks.getDownload('Word')}>
              as a Word doc
            </a>
            .
          </p>
        </AspectedFrame>
      </Section>
      <Section title='Contact Me' />
    </Layout>
  );
};

export default IndexPage;
