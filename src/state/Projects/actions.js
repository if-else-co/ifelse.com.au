export const PROJECTS_FETCH = 'PROJECTS_FETCH';
export const PROJECTS_FETCH_SUCCESSFUL = 'PROJECTS_FETCH_SUCCESSFUL';
export const PROJECTS_FETCH_FAILED = 'PROJECTS_FETCH_FAILED';

export const fetchProjects = () => ({
  type: PROJECTS_FETCH,
});
export const fetchProjectsSuccessful = projects => ({
  type: PROJECTS_FETCH_SUCCESSFUL,
  projects,
});
export const fetchProjectsFailed = () => ({
  type: PROJECTS_FETCH_FAILED
});
