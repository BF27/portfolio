import React from "react";

const ProjectTitle = ({ title, page }) => {
  return (
    <>
      {page ? (
        <a
          href={page}
          target="_blank"
          className="w-full hover:underline text-blue"
        >
          <h4 className="text-blue text-xl font-bold mt-2 w-full">{title}</h4>
        </a>
      ) : (
        <h4 className="text-blue text-xl font-bold mt-2 w-full">{title}</h4>
      )}
    </>
  );
};

export default ProjectTitle;
