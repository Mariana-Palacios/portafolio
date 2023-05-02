import React, { useState, createContext } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [tentaculeLife, setTentaculeLife] = useState([0, 0, 0, 0]);

  return (
    <StateContext.Provider value={{ tentaculeLife, setTentaculeLife }}>
      {children}
    </StateContext.Provider>
  );
};