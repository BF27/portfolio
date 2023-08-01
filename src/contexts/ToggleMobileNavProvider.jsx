import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ToggleMobileNavContext = createContext(null);
export const ChangeToggleMobileNavContext = createContext(null);

const ToggleMobileNavProvider = ({ children }) => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  const changeToggleMobileNav = () => {
    setToggleMobileNav(!toggleMobileNav);
  };

  return (
    <ToggleMobileNavContext.Provider value={toggleMobileNav}>
      <ChangeToggleMobileNavContext.Provider value={changeToggleMobileNav}>
        {children}
      </ChangeToggleMobileNavContext.Provider>
    </ToggleMobileNavContext.Provider>
  );
};

ToggleMobileNavProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToggleMobileNavProvider;
