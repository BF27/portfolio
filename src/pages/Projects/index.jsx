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
      <main className="container mx-auto flex flex-col items-center px-4 justify-center mb-32 gap-4">
        <div className="md:container md:mx-auto flex flex-col items-center justify-center">
          <div className="lg:w-4/6 mx-4 md:mx-0 flex flex-col">
            <h3 className="text-3xl w-full mb-6 mt-14 text-blue">Check them out!</h3>
            <div className="flex flex-wrap justify-center md:justify-between gap-4">
              {projects?.map((project, i) => (
                <ProjectCard project={project} key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
