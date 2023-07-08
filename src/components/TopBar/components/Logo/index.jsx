import { useContext } from "react";
import { toggleMobileNavContext, mobileNavContext } from "../../../../contexts/toggleMobileNavContext";
import PageLogo from "../../../../assets/pageLogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  const toggleMobileNav = useContext(toggleMobileNavContext);
  const mobileNav = useContext(mobileNavContext);
  const click = () => {
    if (mobileNav) {
      toggleMobileNav();
    }
  }
  return (
    <div className="logo w-1/4 md:w-1/6 flex justify-center p-4">
      <Link to="/" onClick={click}>
        <img src={PageLogo} alt="page logo" className="w-14" />
      </Link>
    </div>
  );
};

export default Logo;
