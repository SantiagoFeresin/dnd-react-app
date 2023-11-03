import { React, createContext, useState } from "react";

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <APIContext.Provider value={{ loading, setLoading }}>
      {children}
    </APIContext.Provider>
  );
};
