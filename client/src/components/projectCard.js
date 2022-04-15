import React from 'react';

function ProjectCard({ project }) {

  return(
    <div>
      <p>{project.name}</p>
      <p>{project.repo_owner}</p>
    </div>
  )
}

export default ProjectCard