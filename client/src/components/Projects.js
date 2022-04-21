import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/projects.css'
import { BASE_URL, fetchJSON } from "../App";

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchJSON(`${BASE_URL}/projects?limit=20&offset=${20*(page-1)}`)
    .then(data => setProjectData(data))
    .catch((err) => {
      console.log(err);
    })
  }, [ page ]);

  const projects = projectData ?
    projectData.map(project => 
    <div className='linkedProjects' key={project.id}>
      <Link to={`/projects/${project.id}`}>
        <div>{project.name}</div>
      </Link>
    </div>
    ) : 
    <p>Loading...</p>


  return(
    <div className='listCards'>
      <h1>Projects</h1>
      <div className='projectLinks'>
        {projects}
      </div>
        <div className='cardContainer'>
          <div>
            <button type="button" onClick={() => page > 1 ? setPage (page-1) : () => {return}}>Previous</button>        
            <button type="button" onClick={() => projectData.length < 20 ? () => {return} : setPage (page+1) }>Next</button>
          </div>             
        </div>
    </div>
  )
};
