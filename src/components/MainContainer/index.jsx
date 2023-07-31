import PropTypes from "prop-types";

const MainContainer = ({children}) => {
  return (
    <main className="mb-24 px-8 w-full flex justify-center">
      <div className="md:container md:mx-auto flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
