import { useEffect, useState } from "react";
import { db } from "../../utils/initFirebase";
import { getDocs, collection } from "firebase/firestore";
import profilePhoto from "../../assets/profile.svg";
import Header from "../../components/Header";
import SkillCard from "./components/SkillCard";

const About = ({ changePage }) => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      const skillDocs = await getDocs(collection(db, "skills"));
      setSkills(skillDocs.docs.map((doc) => doc.data()));
    };
    getSkills();
    changePage("about");
  }, []);

  return (
    <>
      <Header />
      <main className="mb-24 pt-8 w-full flex justify-center">
        <div className="container mx-auto flex flex-col items-center gap-4 justify-center">
          <div className="md:w-4/6 mx-4 md:mx-0 flex">
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
          <div className="flex flex-col items-center gap-4">
            <h3 className="md:w-4/6 text-blue text-3xl">My skills</h3>
            <div className="md:w-4/6 flex flex-wrap gap-5 justify-center">
              {skills?.map((skill, i) => (
                <SkillCard
                  key={i}
                  title={skill.title}
                  icon={skill.icon}
                  text={skill.text}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
