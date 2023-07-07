import { useContext } from "react";

import { ActualPageContext } from "../../contexts/ActualPageContext";

const Header = () => {
  const page = useContext(ActualPageContext);
  return (
    <header className="md:border-b-4 border-blue text-blue">
      <div className="container mx-auto flex justify-center">
        <div className="hidden w-1/6">img</div>
        <div className="md:w-4/6 md:border-x-4 border-blue flex flex-col p-4 xl:px-10 2xl:px-28">
          <h2 className="text-center text-lg xs:text-xl sm:text-5xl lg:text-7xl xl:text-8xl">
            Welcome Here!
          </h2>
          <p>
            I am a passionate and skilled frontend developer, dedicated to
            creating exceptional user experiences through intuitive and visually
            appealing websites. With a strong foundation in HTML, CSS, and
            JavaScript, I bring ideas to life and transform designs into
            interactive digital solutions. Browse through my portfolio to
            explore the projects I have worked on, and feel free to reach out if
            you have any questions or opportunities for collaboration. Let's
            build something great together!
          </p>
        </div>
        <div className="hidden w-1/6">img</div>
      </div>
    </header>
  );
};

export default Header;
