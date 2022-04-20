import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import ProjectCard from './projectCard';
import '../styles/projects.css';
import {BASE_URL} from '../App';

function AllProjects() {
  const [projectData, setProjectData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData(BASE_URL + `/projects?limit=20&offset=${20*(page-1)}`)
    .then(data => {
      console.log(projectData.length)
      setProjectData(data)
    })
    .catch((err) => {
      console.log(err);
    })
  },[page]);

  useEffect(() => {
    console.log('rendered')
  }, [projectData])

  const projects = projectData ? projectData.map(project => 
    
    <div className='linkedProjects'><Link to={`/projectCard/${project.id}`}><div>{project.name}</div></Link></div>) : 
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
}
async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}
export default AllProjects;

