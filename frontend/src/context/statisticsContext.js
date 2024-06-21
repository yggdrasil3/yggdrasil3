import React, { createContext, useContext, useState } from "react";

const StatisticsSubjectsContext = createContext();

export const useStatisticsSubjects = () => {
  return useContext(StatisticsSubjectsContext);
};

export const StatisticsSubjectsProvider = ({ children }) => {
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const setStatisticsSubjects = (code) => {
    setCompletedSubjects((prevSubjects) => {
      if (!prevSubjects.includes(code)) {
        return [...prevSubjects, code];
      } else {
        return prevSubjects.filter((subject) => subject !== code);
      }
    });
  };

  const getStatisticsSubjects = () => {
    return completedSubjects;
  };

  return (
    <StatisticsSubjectsContext.Provider
      value={{
        setStatisticsSubjects,
        getStatisticsSubjects,
        completedSubjects,
      }}
    >
      {children}
    </StatisticsSubjectsContext.Provider>
  );
};
