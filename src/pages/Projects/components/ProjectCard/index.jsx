import ProjectImage from "../ProjectImage";
import ProjectLinks from "../ProjectLinks";
import ProjectStacks from "../ProjectStacks";
import ProjectTitle from "../ProjectTitle";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="border-4 max-w-xs flex flex-col items-center justify-center border-blue gap-6 p-4">
      <ProjectImage imgUrl={project.imgUrl} page={project.links.page} />
      <ProjectTitle title={project.title} page={project.links.page} />
      <ProjectStacks stacks={project.stacks} />
      <ProjectLinks github={project.links.github} page={project.links.page} />
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
