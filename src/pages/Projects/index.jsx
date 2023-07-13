import { useEffect, useState } from "react";
import { db } from "../../utils/initFirebase";
import { getDocs, collection } from "firebase/firestore";
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
      <main className="container mx-auto flex flex-col items-center px-4 justify-center mt-6 mb-32 gap-4">
        <h3 className="text-blue text-2xl sm:text-3xl md:w-4/6">
          Check them out!
        </h3>
        <div className="md:w-4/6 flex flex-wrap gap-6">
          {projects?.map((project, i) => (
            <ProjectCard project={project} key={i} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
