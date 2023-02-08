
import {useParams} from 'react-router-dom'
import {projects} from '../helpers/projectsList'
import BtnGIt from '../compontnts/btnGit/BtnGIt'



function ProjectPage() {
  const {id} = useParams()
  const item = projects[id]

  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">

            <h1 className="title-1"> {item.title} </h1>

            <img src={item.imgUrlBig} alt="" className="project-details__cover" />

            <div className="project-details__desc">
              <p> {item.skills} </p>
            </div>

            {
              item.gitHubLink && (
                <BtnGIt Link='https://github.com/sava911' />
              )
            }



          </div>
        </div>
      </main>
    </>
  )
}

export default ProjectPage