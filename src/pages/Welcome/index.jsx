import { useEffect, useState } from "react";
import { db } from "../../utils/initFirebase";
import { getDocs, collection } from "firebase/firestore";
import Header from "../../components/Header";
import SkillCard from "./components/SkillCard";

const Welcome = ({ changePage }) => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      const skillDocs = await getDocs(collection(db, "skills"));
      setSkills(skillDocs.docs.map((doc) => doc.data()));
    };
    getSkills();
    changePage("welcome");
  }, []);

  return (
    <>
      <Header />
      <main className="mb-20">
        <div className="container mx-auto flex flex-col items-center gap-6 py-12">
          <h3 className="md:w-4/6 text-blue text-3xl">My skills</h3>
          <div className="md:w-4/6 flex flex-wrap gap-5 justify-center">
            {skills?.map((skill, i) => <SkillCard key={i} title={skill.title} icon={skill.icon} text={skill.text}/>)}
          </div>
        </div>
      </main>
    </>
  );
};

export default Welcome;
