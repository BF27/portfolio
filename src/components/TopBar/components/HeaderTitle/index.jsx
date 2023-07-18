import { useContext } from "react";
import { toggleMobileNavContext, mobileNavContext } from "../../../../contexts/toggleMobileNavContext";
import { Link } from "react-router-dom";

const HeaderTitle = () => {
  const toggleMobileNav = useContext(toggleMobileNavContext);
  const mobileNav = useContext(mobileNavContext);
  const click = () => {
    if (mobileNav) {
      toggleMobileNav();
    }
  }
  return (
    <div className="border-x-4 md:border-0 border-blue w-2/4 md:w-2/6 flex items-center justify-center text-lg sm:text-3xl">
      <Link to="/" onClick={click}>
        <h1>Bence Farkas</h1>
      </Link>
    </div>
  );
};

export default HeaderTitle;
