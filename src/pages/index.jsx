import React from 'react';

import AspectedFrame from '../components/AspectedFrame';
import Layout from '../components/Layout';
import ProjectGroup from '../components/ProjectGroup';
import Section from '../components/Section';

import profilePicture from '../images/profile-rounded-2022.png';
import projects from '../data/projects.json';
import ResumeLinks from '../data/ResumeLinks';

const projectGroupColors = {
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
      <Section title='About Me'>
        <p>
          User-oriented technology consultant with <strong>3+ years</strong> of professional IT experience,
          1 of which has been focused primarily on Software Engineering.
          I've worked with small startups, large companies, and non-profit organizations of all sizes.
          I also have a <strong>Bachelor of Science degree</strong> in Computer Information Technology from Brigham Young University - Idaho.
          {' '}<a href='https://www.linkedin.com/in/zach-caldwell-ba2069127/'><strong>See my LinkedIn profile</strong></a> for more details.
        </p>
        <p>
          I`m available for consulting and/or hire (<a href='#contact-me'><strong>contact me below!</strong></a>),
          and am eligible to work with any U.S. company without requiring sponsorship.
          I prefer to work remotely, but am also open to discussing assisted relocation.
        </p>
      </Section>
      <Section title='My Projects'>
        {Object.keys(projects).map((group, i) => (
          <ProjectGroup
            bgColor={projectGroupColors[group]}
            key={i}
            title={group}
          >
            {projects[group]}
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