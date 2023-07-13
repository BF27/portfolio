import React from 'react'

const ProjectImage = ({imgUrl, page}) => {
  return (
    <div className="overflow-hidden">
        <a href={page} target="_blank">
          <img
            src={imgUrl}
            alt="ben&jud"
            className="hover:scale-150 duration-500 ease-in-out"
          />
        </a>
      </div>
  )
}

export default ProjectImage
