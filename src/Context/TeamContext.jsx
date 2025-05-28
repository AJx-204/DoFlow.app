import { createContext, useState, useContext } from 'react';

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {

  const [selectedTeam, setSelectedTeam] = useState(null);

  const value = {
     selectedTeam,
     setSelectedTeam
  };

  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);