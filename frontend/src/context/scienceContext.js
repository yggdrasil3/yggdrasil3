import React, { createContext, useContext, useState } from "react";

const ScienceSubjectsContext = createContext();

export const useScienceSubjects = () => {
  return useContext(ScienceSubjectsContext);
};

export const ScienceSubjectsProvider = ({ children }) => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const setScienceSubjects = (code) => {
    setCompletedSubjects((prevSubjects) => {
      if (!prevSubjects.includes(code)) {
        return [...prevSubjects, code];
      } else {
        return prevSubjects.filter((subject) => subject !== code);
      }
    });
  };

  const getScienceSubjects = () => {
    return completedSubjects;
  };

  return (
    <ScienceSubjectsContext.Provider
      value={{ setScienceSubjects, getScienceSubjects, completedSubjects }}
    >
      {children}
    </ScienceSubjectsContext.Provider>
  );
};
