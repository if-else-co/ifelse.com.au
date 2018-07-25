import React from 'react';

import desktop from './desktop.png';
import phone from './phone.png';
import './styles.css';

const ProjectTeaser = props => {
  return (
    <li className="project-teaser">
      <a className="project-teaser__link" href={props.url}>
        <div className="project-teaser__image-wrapper">
          <img className="project-teaser__desktop-wrapper" src={desktop} alt=""/>
          <img className="project-teaser__desktop-image" src={props.featuredImage} alt="" />
          <img className="project-teaser__mobile-wrapper" src={phone} alt=""/>
          <img className="project-teaser__mobile-image" src={props.mobileImage} alt="" />
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
