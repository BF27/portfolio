import { Link } from "react-router-dom";

const HeaderTitle = () => {
  return (
    <div className="border-x-4 md:border-0 border-blue w-2/4 md:w-2/6 flex items-center justify-center text-lg sm:text-3xl">
      <Link to="/">
        <h1>Bence Farkas</h1>
      </Link>
    </div>
  );
};

export default HeaderTitle;
