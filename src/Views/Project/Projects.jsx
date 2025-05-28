import React from 'react'
import { useProject } from '../../Context/ProjectContext';

const Projects = () => {

    const { selectedProject } = useProject();

  return (
    <div>
        {selectedProject ? selectedProject._id : "select the project"}
    </div>
  )
}

export default Projects;