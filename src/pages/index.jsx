import React from 'react';

import AspectedFrame from '../components/AspectedFrame';
import Page from '../components/Page';
import ProjectGroup from '../components/ProjectGroup';
import Section from '../components/Section';

import projects from '../data/projects.json';
import ResumeLinks from '../data/ResumeLinks';

const profilePicture = 'images/profile-rounded-2023.png';
const projectGroupColors = {
  Professional: 'rgb(191, 162, 8)', // Formerly var(--bs-yellow)
  Personal: 'rgb(33, 150, 243)', // Same as var(--bs-primary)
  Academic: 'rgb(76, 175, 80)' // Same as var(--bs-green)
};

const IndexPage = () => {
  return (
    <Page title='Home'>
      <Section id='home' bgColor='var(--bs-primary)' color='var(--bs-light)'>
        <div className='text-center'>
          <img className='img-fluid' src={profilePicture} alt='This is me. Hello there!' />
          <h1>Zach Caldwell</h1>
          <h5>Full-Stack Software Engineer and Tech Consultant</h5>
        </div>
      </Section>
      <Section title='About Me'>
        <p>
          User-oriented technical consultant with <strong>8+ years</strong> of software projects <a href='https://github.com/caldwellz'><strong>ready to demonstrate</strong></a>, as well as <strong>7+ years</strong> of professional software engineering and technical architecture / operations experience.
          I'm strongest with <strong>Node.js, React, AWS</strong> cloud technologies, vanilla <strong>HTML5 / CSS3 / JS (ES6+), C++, DynamoDB, MongoDB,</strong> and <strong>MySQL</strong> (MariaDB), but am comfortable working with a wide variety of languages, environments, cloud platforms, and relational / document / key-value databases.
        </p>
        <p>
          I've worked with small startups, large companies, and non-profit organizations of all sizes, both as an employee and as a consultant.
          {' '}<a href='https://www.linkedin.com/in/zach-caldwell-ba2069127/'><strong>See my LinkedIn profile</strong></a> for more details.
          I also have a <strong>Bachelor of Science</strong> degree in Computer Information Technology from Brigham Young University - Idaho, covering mainly <strong>Computer Science and Computer Engineering</strong> topics such as web & embedded development, advanced algorithms and object-oriented architecture, and the design of CPUs, operating systems, and computer networks.
        </p>
        <p>
          I'm available for consulting and/or hire in the U.S. without requiring sponsorship; <a href='https://www.upwork.com/freelancers/~0130c0bf88105e61a3'><strong>visit my Upwork page</strong></a> or <a href='#contact-me'><strong>contact me below</strong></a>!
          I prefer to work fully remotely, but am also open to hybrid work schedules in Northern Utah.
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
    </Page>
  );
};

export default IndexPage;
