import React, { useEffect, useState } from "react";
<<<<<<< HEAD:client/src/components/Projects.js
import { Link } from 'react-router-dom';
import '../styles/projects.css'
import { BASE_URL, fetchJSON } from "../App";
=======
import { Link, Route } from 'react-router-dom';
import ProjectCard from './projectCard';
import '../styles/projects.css';
import {BASE_URL} from '../App';
>>>>>>> 42cc8e3bedbf61c0d7a55f2fa56d7b4665193b48:client/src/components/allProjects.js

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [page, setPage] = useState(1);
<<<<<<< HEAD:client/src/components/Projects.js

  useEffect(() => {
    fetchJSON(`${BASE_URL}/projects?limit=20&offset=${20*(page-1)}`)
    .then(data => setProjectData(data))
=======
  useEffect(() => {
    fetchData(BASE_URL + `/projects?limit=20&offset=${20*(page-1)}`)
    .then(data => {
      console.log(projectData.length)
      setProjectData(data)
    })
>>>>>>> 42cc8e3bedbf61c0d7a55f2fa56d7b4665193b48:client/src/components/allProjects.js
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
