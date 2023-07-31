import PropTypes from "prop-types";

const ProjectTitle = ({ title, page }) => {
  return (
    <>
      {page ? (
        <a
          href={page}
          target="_blank"
          className="w-full hover:underline text-blue"
          rel="noreferrer"
        >
          <h4 className="text-blue text-xl font-bold mt-2 w-full">{title}</h4>
        </a>
      ) : (
        <h4 className="text-blue text-xl font-bold mt-2 w-full">{title}</h4>
      )}
    </>
  );
};

ProjectTitle.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string,
};

export default ProjectTitle;
