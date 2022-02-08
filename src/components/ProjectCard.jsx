import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Card } from 'react-bootstrap';

const ProjectCard = (props) => {
  const cardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    minWidth: props.minWidth
  };

  // Extract and process two types of links: Live (up to one) and Source (any number, with padding between)
  let liveLink;
  const sourceLinks = [];
  let sourceLinkCount = 0;
  for (const link of props.links) {
    if (link.type === 'live') {
      liveLink = <Card.Link className='text-dark' href={link.url}>{link.url}</Card.Link>;
      continue;
    }
    if (link.type === 'source') {
      let padding = '';
      if (sourceLinkCount > 0) {
        padding = ', ';
      }
      let item;
      if (link.url) {
        item = (
          <span className='text-dark'>
            {padding}
            <Card.Link className='text-dark' href={link.url}>
              {link.title}
            </Card.Link>
          </span>
        );
      } else {
        item = <span className='text-dark'>{padding}{link.title}</span>;
      }
      sourceLinks.push(item);
      ++sourceLinkCount;
      continue;
    }
  }

  return (
    <Card className={'col m-' + props.margin} style={cardStyle}>
      {/* Title, live link and description */}
      <Card.Body>
        <Card.Title className={'text-' + props.titleAlign}>{props.title}</Card.Title>
        {liveLink}
        <Card.Text>
          {props.children}
        </Card.Text>
      </Card.Body>

      {/* Source link(s) that were processed above */}
      <div className='px-3 py-2 border-top border-bottom border-dark'>
        Source:{' '}
        {sourceLinks}
      </div>

      {/* Lang and other tags */}
      <Card.Footer className='px-2'>
        <Badge
          pill
          className={'mx-' + props.tagSpacing}
          bg={props.langColor}
          text={props.langVariant}
        >
          {props.lang}
        </Badge>
        {props.tags.map((tag, i) => (
          <Badge
            pill
            className={'mx-' + props.tagSpacing}
            bg={props.tagColor}
            text={props.tagVariant}
            key={i}
          >
            {tag}
          </Badge>
        ))}
      </Card.Footer>
    </Card>
  );
};

ProjectCard.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  lang: PropTypes.string.isRequired,
  langColor: PropTypes.string,
  langVariant: PropTypes.string,
  links: PropTypes.array,
  margin: PropTypes.string,
  minWidth: PropTypes.string,
  tags: PropTypes.array,
  tagColor: PropTypes.string,
  tagSpacing: PropTypes.string,
  tagVariant: PropTypes.string,
  title: PropTypes.string,
  titleAlign: PropTypes.string
};

ProjectCard.defaultProps = {
  bgColor: 'var(--bs-light)',
  color: 'var(--bs-dark)',
  langColor: 'dark',
  langVariant: 'light',
  links: [],
  margin: '2',
  minWidth: '0',
  tags: [],
  tagColor: 'light',
  tagSpacing: '1',
  tagVariant: 'dark',
  titleAlign: 'center'
};

export default ProjectCard;
