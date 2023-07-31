import githubIcon from "../../../../assets/github-icon.svg";
import webpageIcon from "../../../../assets/webpage-icon.svg";
import PropTypes from "prop-types";

const ProjectLinks = ({ github, page }) => {
  return (
    <div className="w-full flex justify-between items-end">
      <a href={github} target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="github" className=" h-10" />
      </a>
      {page && (
        <a href={page} target="_blank" rel="noreferrer">
          <img src={webpageIcon} alt="Webpage" className=" h-10" />
        </a>
      )}
    </div>
  );
};

ProjectLinks.propTypes = {
  github: PropTypes.string.isRequired,
  page: PropTypes.string,
};

export default ProjectLinks;
