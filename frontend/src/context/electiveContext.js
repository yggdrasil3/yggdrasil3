import React, { createContext, useContext, useState } from "react";

const ElectiveSubjectsContext = createContext();

export const useElectiveSubjects = () => {
  return useContext(ElectiveSubjectsContext);
};

export const SubjectsProvider = ({ children }) => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const setElectiveSubjects = (code) => {
    setCompletedSubjects((prevSubjects) => {
      if (!prevSubjects.includes(code)) {
        return [...prevSubjects, code];
      } else {
        return prevSubjects.filter((subject) => subject !== code);
      }
    });
  };

  const getElectiveSubjects = () => {
    return completedSubjects;
  };

  return (
    <ElectiveSubjectsContext.Provider
      value={{ setElectiveSubjects, getElectiveSubjects, completedSubjects }}
    >
      {children}
    </ElectiveSubjectsContext.Provider>
  );
};
