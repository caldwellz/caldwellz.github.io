import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './ProjectCard';

const ProjectGroup = (props) => {
  return (
    <div>
      <h3 className={'pt-4 text-decoration-underline text-' + props.titleAlign}>{props.title}</h3>
      {/* A CardGroup is not used here because it would override the needed flex parameters */}
      <div className='d-flex row justify-content-center'>
        {props.children.map((project, i) => (
          <ProjectCard
            bgColor={props.bgColor}
            color={props.color}
            key={i}
            lang={project.lang}
            links={project.links}
            minWidth={props.childMinWidth}
            tags={project.tags}
            title={project.title}
            titleAlign={props.childTitleAlign}
          >
            {project.desc}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

ProjectGroup.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.array.isRequired,
  childTitleAlign: PropTypes.string,
  childMinWidth: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  titleAlign: PropTypes.string
};

ProjectGroup.defaultProps = {
  bgColor: 'var(--bs-primary)',
  childTitleAlign: 'center',
  childMinWidth: '255px',
  color: 'var(--bs-light)',
  titleAlign: 'center'
};

export default ProjectGroup;
