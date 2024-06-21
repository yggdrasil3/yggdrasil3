import React, { createContext, useContext, useState } from "react";

const MandatorySubjectsContext = createContext();

export const useMandatorySubjects = () => {
  return useContext(MandatorySubjectsContext);
};

export const MandatorySubjectsProvider = ({ children }) => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const setMandatorySubjects = (code) => {
    setCompletedSubjects((prevSubjects) => {
      if (!prevSubjects.includes(code)) {
        return [...prevSubjects, code];
      } else {
        return prevSubjects.filter((subject) => subject !== code);
      }
    });
  };

  const getMandatorySubjects = () => {
    return completedSubjects;
  };

  return (
    <MandatorySubjectsContext.Provider
      value={{ setMandatorySubjects, getMandatorySubjects, completedSubjects }}
    >
      {children}
    </MandatorySubjectsContext.Provider>
  );
};
