import PageLogo from "../../../../assets/pageLogo.svg";

const Logo = () => {
  return (
    <div className="logo w-1/4 md:w-1/6 flex justify-center p-4">
      <img src={PageLogo} alt="page logo" className="w-14" />
    </div>
  );
};

export default Logo;
