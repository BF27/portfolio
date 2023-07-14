import githubIcon from "../../../../assets/github-icon.svg";
import webpageIcon from "../../../../assets/webpage-icon.svg";

const ProjectLinks = ({ github, page }) => {
  return (
    <div className="w-full flex justify-between items-end">
      <a href={github} target="_blank">
        <img src={githubIcon} alt="github" className=" h-10" />
      </a>
      {page && (
        <a href={page} target="_blank">
          <img src={webpageIcon} alt="Webpage" className=" h-10" />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
