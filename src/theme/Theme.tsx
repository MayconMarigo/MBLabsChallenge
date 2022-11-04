import React, { ReactNode, useContext } from "react";
import { Themes } from "./themes";
//to-do : dark theme

interface ThemeProps {
  children: ReactNode;
}

//to-do : switch themes
const ThemeContext = React.createContext(Themes.light);

const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={Themes.light}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeUseContext = () => {
  const context = useContext(ThemeContext);

  return context;
};
export { ThemeUseContext, ThemeProvider };
