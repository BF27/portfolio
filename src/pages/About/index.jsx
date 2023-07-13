import { useEffect } from "react";
import profilePhoto from "../../assets/profile.svg";
import Header from "../../components/Header";

const About = ({ changePage }) => {
  useEffect(() => {
    changePage("about");
  }, []);

  return (
    <>
      <Header />
      <main className="mb-20 pt-8 w-full flex justify-center">
        <div className="container mx-auto flex justify-center">
          <div className="w-4/6 flex items-end">
            <div className=" lg:w-2/3 text-blue">
              <h3 className="text-3xl w-full mb-6">Hi!</h3>
              <p>
                Hi! I am a results-driven frontend developer with a deep passion
                for creating captivating user experiences. With [number] years
                of experience, I specialize in crafting visually stunning
                websites that are not only aesthetically pleasing but also
                highly functional and user-friendly. Proficient in HTML, CSS,
                and JavaScript, I excel at transforming designs into responsive,
                pixel-perfect interfaces.
              </p>
              <p>
                Collaboration is at the heart of my approach. I enjoy working
                closely with designers, backend developers, and stakeholders to
                ensure seamless integration of design and functionality. By
                leveraging my strong communication skills and keen attention to
                detail, I consistently deliver projects that exceed
                expectations.
              </p>
            </div>
            <img
              src={profilePhoto}
              alt="Profile photo"
              className="hidden lg:block w-1/3"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
