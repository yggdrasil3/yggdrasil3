import React, { createContext, useContext, useState } from "react";

const HumanidadesSubjectsContext = createContext();

export const useHumanidadesSubjects = () => {
  return useContext(HumanidadesSubjectsContext);
};

export const HumanidadesSubjectsProvider = ({ children }) => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const setHumanidadesSubjects = (code) => {
    setCompletedSubjects((prevSubjects) => {
      if (!prevSubjects.includes(code)) {
        return [...prevSubjects, code];
      } else {
        return prevSubjects.filter((subject) => subject !== code);
      }
    });
  };

  const getHumanidadesSubjects = () => {
    return completedSubjects;
  };

  return (
    <HumanidadesSubjectsContext.Provider
      value={{
        setHumanidadesSubjects,
        getHumanidadesSubjects,
        completedSubjects,
      }}
    >
      {children}
    </HumanidadesSubjectsContext.Provider>
  );
};
