/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  
  return (
    <AppContext.Provider
      value={{
        theme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext)