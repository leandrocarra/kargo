import React, { createContext, useState, useContext } from "react";

const CollapseMenusContext = createContext();

export default function CollapseMenusProvider({ children }) {
  const [ collapseInDesktop, setCollapseInDesktop ] = useState(false);

  const handleCollapse = (type) => {
    switch (type) {
      case 'closeDesktop':
        setCollapseInDesktop(true)
        break;
      case 'openDesktop':
        setCollapseInDesktop(false)
        break;
      default:
        break;
    }
  }

  return (
    <CollapseMenusContext.Provider
      value={{
        collapseInDesktop,
        handleCollapse
      }}
    >
      {children}
    </CollapseMenusContext.Provider>
  )
}

export function useCollapseDesktop() {
  const context = useContext(CollapseMenusContext);
  const {
    collapseInDesktop,
    handleCollapse
  } = context;

  return {
    collapseInDesktop,
    handleCollapse
  };
}
