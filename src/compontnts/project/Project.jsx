import React from 'react'
import './styles.css'
function Project({title, imgUrl}) {
  return (
    <>

      <li className="project">
        <a href="./project-page.html">
          <img src={imgUrl} alt="Project img" className="project__img" />
          <h3 className="project__title"> {title} </h3>
        </a>
      </li>
    </>
  )
}

export default Project