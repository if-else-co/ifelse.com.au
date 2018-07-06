export const getProjectsOfCategory = projectStore => 
  projectStore
  .projects
  .filter(project => project.category);
  
export const getProjectById = (projectStore, id) => 
  projectStore
  .projects
  .filter(project => project.sys.id === id)
  .map(project => project.fields)[0];