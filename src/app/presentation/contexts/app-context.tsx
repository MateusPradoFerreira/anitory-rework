import { createContext, ReactNode, useState } from "react";

export type AppContextProps = {
  sidebarActive: boolean;
  toggleSidebarState: () => void;
}

export const AppContext = createContext<AppContextProps>({
  sidebarActive: false,
  toggleSidebarState: () => {},
});

export function AppProvider({ children }: {
  children: ReactNode;
}) {

  const [ sidebarActive, setSidebarActive ] = useState(false);
  const toggleSidebarState = () => setSidebarActive(prev => !prev);

  return (
    <AppContext.Provider value={{ sidebarActive, toggleSidebarState }}>
      {children}
    </AppContext.Provider>
  );

}