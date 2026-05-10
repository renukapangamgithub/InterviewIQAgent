import { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  return (
    <StoreContext.Provider value={{ userData, setUserData }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;