import React, { createContext, useContext, useState } from "react";

const FreeSubjectsContext = createContext();

export const useFreeSubjects = () => {
  return useContext(FreeSubjectsContext);
};

export const SubjectsProvider = ({ children }) => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const setFreeSubjects = (code) => {
    setCompletedSubjects((prevSubjects) => {
      if (!prevSubjects.includes(code)) {
        return [...prevSubjects, code];
      } else {
        return prevSubjects.filter((subject) => subject !== code);
      }
    });
  };

  const getFreeSubjects = () => {
    return completedSubjects;
  };

  return (
    <FreeSubjectsContext.Provider
      value={{ setFreeSubjects, getFreeSubjects, completedSubjects }}
    >
      {children}
    </FreeSubjectsContext.Provider>
  );
};
