import React from 'react'
import Project from '../compontnts/project/Project';
import {projects} from './../helpers/projectsList';





function Projects() {
  return (
    <>
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {
              projects.map((obj, index) => (
                <Project
                  key={obj.id}
                  index={index}
                  {...obj}
                />

              )
              )
            }


          </ul>
        </div>
      </main>

    </>
  )
}

export default Projects