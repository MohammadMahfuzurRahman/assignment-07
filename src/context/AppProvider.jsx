import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString(),
    };

    setTimeline((prev) => [newEntry, ...prev]);
  };

  return (
    <AppContext.Provider value={{ timeline, addEntry }}>
      {children}
    </AppContext.Provider>
  );
};