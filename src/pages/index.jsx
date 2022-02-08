import React from 'react';

import AspectedFrame from '../components/AspectedFrame';
import Layout from '../components/Layout';
import Section from '../components/Section';

import profilePicture from '../images/profile-rounded-2022.png';
import ResumeLinks from '../data/ResumeLinks';

const IndexPage = () => {
  return (
    <Layout>
      <Section id='home' bgColor='var(--bs-primary)' color='var(--bs-light)'>
        <div className='text-center'>
          <img className='img-fluid' src={profilePicture} alt='This is me. Hello there!' />
          <h1>Zach Caldwell</h1>
          <h5>Full-Stack Software Engineer and IT Consultant</h5>
        </div>
      </Section>
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
