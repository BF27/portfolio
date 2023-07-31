import PropTypes from "prop-types";

const ProjectImage = ({ imgUrl, page }) => {
  return (
    <div className="overflow-hidden">
      {page ? (
        <a href={page} target="_blank" rel="noreferrer">
          <img
            src={imgUrl}
            alt="ben&jud"
            className="hover:scale-150 duration-500 ease-in-out"
          />
        </a>
      ) : (
        <img
          src={imgUrl}
          alt="ben&jud"
          className="hover:scale-150 duration-500 ease-in-out"
        />
      )}
    </div>
  );
};

ProjectImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  page: PropTypes.string,
};

export default ProjectImage;
