import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ActualPageContext = createContext(null);
export const ChangeActualPageContext = createContext(null);

const ActualPageProvider = ({ children }) => {
  const [actualPage, setActualPage] = useState("welcome");
  
  const changeActualPage = (page) => {
    setActualPage(page);
  };

  return (
    <ActualPageContext.Provider value={actualPage}>
      <ChangeActualPageContext.Provider value={changeActualPage}>
        {children}
      </ChangeActualPageContext.Provider>
    </ActualPageContext.Provider>
  );
};

ActualPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActualPageProvider;
