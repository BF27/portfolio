import { useEffect, useState } from "react";
import { db } from "../../utils/initFirebase";
import { getDocs, collection } from "firebase/firestore";
import profilePhoto from "../../assets/profile.svg";
import Header from "../../components/Header";
import SkillCard from "./components/SkillCard";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";

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
      <MainContainer>
        <div className="lg:w-4/6 mx-4 md:mx-0 flex items-end">
          <div className=" lg:w-3/4 text-blue">
            <Title title={"Welcome Here!"} />
            <p>
              I'm a motivated frontend developer with a strong desire to
              continually improve and grow in my skills. I have a passion for
              building web applications and enjoy exploring new
              technologies. With experience in React, Tailwind CSS, Bootstrap, Git, Firebase and deep fundamentals in JavaScript, HTML and CSS. I'm eager to
              take on new challenges and projects!
            </p>
          </div>
          <img
            src={profilePhoto}
            alt="Profile photo"
            className="hidden lg:block w-1/4"
          />
        </div>
        <div className="lg:w-4/6 mx-4 md:mx-0 flex flex-col items-center gap-4 text-blue">
          <Title title="My skills" />
          <div className=" flex flex-wrap justify-center md:justify-between gap-4">
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
      </MainContainer>
    </>
  );
};

export default About;
