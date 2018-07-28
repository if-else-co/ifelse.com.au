import React from 'react';

import ProjectTeaser from '../ProjectTeaser';

import './styles.css';

const ProjectList = props => {
  let loadedProjects = props.loading === false
    ? props.projects
    : [{}, {}, {}, {}, {}, {}];

  let projects = loadedProjects.map((project, i) => {
    let imgSrc;
    let mobileSrc;
    let category;
    let id = i;
    let title;
    let link;

    if (props.loading === false) {
      if (project.fields.featured_image) {
        imgSrc = project.fields.featured_image.fields.file.url;
        mobileSrc = project.fields.mobile_image.fields.file.url;
        category = project.fields.tags[0].fields.title;
      }

      id = project.sys.id;
      title = project.fields.title;
      link = project.fields.link;
    }

    return (
      <ProjectTeaser 
        key={id}
        to={id}
        featuredImage={imgSrc}
        mobileImage={mobileSrc}
        title={title}
        url={link}
        type={category}
        loading={props.loading}
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
