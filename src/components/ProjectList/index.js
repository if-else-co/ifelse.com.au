import React from 'react';

import ProjectTeaser from '../ProjectTeaser';

import './styles.css';

const ProjectList = props => {
  let projects = props.projects.map(project => {
    let imgSrc;
    let mobileSrc;
    let category;
    if (project.fields.featured_image) {
      imgSrc = project.fields.featured_image.fields.file.url;
      mobileSrc = project.fields.mobile_image.fields.file.url;
      category = project.fields.tags[0].fields.title;
    }

    return (
      <ProjectTeaser 
        key={project.sys.id}
        to={project.sys.id}
        featuredImage={imgSrc}
        mobileImage={mobileSrc}
        title={project.fields.title}
        url={project.fields.link}
        type={category}
      />
    );
  });

  return (
    <div className="project-list">
      <h2 className="project-list__title" id="case-studies">Case Studies</h2>
      <ul className="project-list__list">{projects}</ul>
    </div>
  )
};

export default ProjectList;
