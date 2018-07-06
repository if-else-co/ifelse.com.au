import React from 'react';

import './styles.css';

const ProjectTeaser = props => {
  return (
    <li className="project-teaser">
      <a href={props.url}>
        <div className="project-teaser__image-wrapper">
          <img className="project-teaser__image" src={props.featuredImage} alt="" />
        </div>
        <div className="project-teaser__content">
          <h3 className="project-teaser__name">{props.title}</h3>
          <div className="project-teaser__type">{props.type}</div>
        </div>
      </a>
    </li>
  );
}
  

export default ProjectTeaser;
