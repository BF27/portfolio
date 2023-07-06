import DesktopNav from "./components/DesktopNav";
import HeaderTitle from "./components/HeaderTitle";
import Logo from "./components/Logo";
import MobileNav from "./components/MobileNav";

const Header = () => {
  return (
    <header className="text-blue border-b-4 p-0 m-0">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <DesktopNav />

        {/* Header Title */}
        <HeaderTitle />

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
