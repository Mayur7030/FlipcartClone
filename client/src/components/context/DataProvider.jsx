import { createContext, useState } from "react";

const DataContext = createContext(null);

const DataProvider = () => {
    const [account,toggleAccount] = useState('')

  return <DataContext.Provider value={{account,toggleAccount}}></DataContext.Provider>;
};

export default DataProvider