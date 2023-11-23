import { createContext, useState } from "react";

 export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, toggleAccount] = useState("");

  return (
    <DataContext.Provider value={{ account, toggleAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
