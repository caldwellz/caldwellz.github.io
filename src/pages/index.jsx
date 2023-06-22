import React from 'react';

import AspectedFrame from '../components/AspectedFrame';
import Layout from '../components/Layout';
import ProjectGroup from '../components/ProjectGroup';
import Section from '../components/Section';

// import profilePicture from '../images/profile-rounded-2022.png';
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
          {/* <img className='img-fluid' src={profilePicture} alt='This is me. Hello there!' /> */}
          <h1>Zach Caldwell</h1>
          <h5>Full-Stack Software Engineer and IT Consultant</h5>
        </div>
      </Section>
      <Section title='About Me'>
        <p>
          User-oriented tech consultant with <strong>10+ years</strong> of personal <strong>software development</strong> projects, <strong>5+ years</strong> of professional <strong>IT</strong> experience, and <strong>3+ years</strong> specifically as a <strong> Software Engineer </strong> using <strong>Node.js, React,</strong> and/or <strong>AWS</strong>.
        </p>
        <p>
          I've worked with small startups, large companies, and non-profit organizations of all sizes.
          I also have a <strong>Bachelor of Science degree</strong> in Computer Information Technology from Brigham Young University - Idaho.
          {' '}<a href='https://www.linkedin.com/in/zach-caldwell-ba2069127/'><strong>See my LinkedIn profile</strong></a> for more details.
        </p>
        <p>
          I`m available for consulting and/or hire in the U.S. without requiring sponsorship; <a href='https://www.upwork.com/freelancers/~0130c0bf88105e61a3'><strong>visit my Upwork page</strong></a> or <a href='#contact-me'><strong>contact me below</strong></a>!
          I prefer to work completely remote, but am also open to hybrid work environments in Northern Utah.
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
      <Section title='Contact Me'>
        <AspectedFrame title='Contact Me' src='https://docs.google.com/forms/d/e/1FAIpQLSc6o16QyDB1-iig2rZEYtfPn2GDZ_ib_NGB7cjhRVUlStxTUw/viewform?embedded=true' />
      </Section>
    </Layout>
  );
};

export default IndexPage;
