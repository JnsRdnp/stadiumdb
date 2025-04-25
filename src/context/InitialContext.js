import { createContext, useState } from "react";

export const InitialContext = createContext();

export function InitialProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <InitialContext.Provider value={{ user, setUser }}>
      {children}
    </InitialContext.Provider>
  );
}