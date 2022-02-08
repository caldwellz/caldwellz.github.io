import React from 'react';

import AspectedFrame from '../components/AspectedFrame';
import Layout from '../components/Layout';
import ProjectGroup from '../components/ProjectGroup';
import Section from '../components/Section';

import portfolio from '../data/portfolio.json';
import profilePicture from '../images/profile-rounded-2022.png';
import ResumeLinks from '../data/ResumeLinks';

const portfolioGroupColors = {
  Professional: 'var(--bs-yellow)',
  Personal: 'var(--bs-primary)',
  Academic: 'var(--bs-green)'
};

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
      <Section title='My Portfolio'>
        {Object.keys(portfolio).map((group, i) => (
          <ProjectGroup
            bgColor={portfolioGroupColors[group]}
            key={i}
            title={group}
          >
            {portfolio[group]}
          </ProjectGroup>
        ))}
      </Section>
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
