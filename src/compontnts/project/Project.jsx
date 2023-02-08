import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css'
function Project({title, imgUrl, index}) {
  return (
    <>
      <NavLink to={`/project/${index}`}>

        <li className="project">
          <img src={imgUrl} alt="Project img" className="project__img" />
          <h3 className="project__title"> {title} </h3>
        </li>

      </NavLink>
    </>
  )
}

export default Project