import DesktopNav from "./components/DesktopNav";
import HeaderTitle from "./components/HeaderTitle";
import Logo from "./components/Logo";
import MobileNav from "./components/MobileNav";

const TopBar = () => {
  return (
    <div className="text-blue border-b-4 p-0 m-0">
      <div className="container mx-auto flex justify-between">
        <Logo />
        <DesktopNav />
        <HeaderTitle />
        <MobileNav />
      </div>
    </div>
  );
};

export default TopBar;
