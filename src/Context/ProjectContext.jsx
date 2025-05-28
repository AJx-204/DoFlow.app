import { createContext, useState, useContext } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

  const [selectedProject, setSelectedProject] = useState(null);

  const value = {
     selectedProject,
     setSelectedProject
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);