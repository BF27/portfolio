import { useEffect, useState } from "react";
import { db } from "../../utils/initFirebase";
import { getDocs, collection } from "firebase/firestore";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";
import Header from "../../components/Header";
import ProjectCard from "./components/ProjectCard";

const Projects = ({ changePage }) => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getSkills = async () => {
      const skillDocs = await getDocs(collection(db, "projects"));
      setProjects(skillDocs.docs.map((doc) => doc.data()));
    };
    getSkills();
    changePage("projects");
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <div className="lg:w-4/6 mx-4 md:mx-0 flex flex-col">
          <Title title={"check Them out!"} />
          <div className="flex flex-wrap justify-center md:justify-between gap-4">
            {projects?.map((project, i) => (
              <ProjectCard project={project} key={i} />
            ))}
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Projects;
