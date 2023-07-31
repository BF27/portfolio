import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="border-t-4 border-blue bg-blue fixed bottom-0 left-0 w-full">
      <div className="flex gap-8 p-5 items-center justify-center bg-light-bg w-full lg:w-1/3">
        <a href="https://github.com/BF27" target="_blank" rel="noreferrer">
          <img src={github}  alt="github" className="h-10"/>
        </a>
        <a href="https://www.linkedin.com/in/farkasbence27/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" className="h-10"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
