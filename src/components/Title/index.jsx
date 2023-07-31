import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <>
      <h3 className="text-3xl mb-4 mt-6 lg:mb-6 lg:mt-14 text-center text-blue md:text-left w-full">
        {title}
      </h3>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
