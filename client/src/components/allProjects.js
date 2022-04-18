import React, { useEffect, useState } from "react";
import { Link, Route } from 'react-router-dom';
import ProjectCard from './projectCard'
//import './A.css'

function AllProjects() {
  const [projectData, setProjectData] = useState([]);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('http://localhost:8080/api')
  useEffect(() => {
    fetchData(url + `/projects?limit=20&offset=${20*(page-1)}`)
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
    <Link to={`/projectCard/${project.id}`}><li>{project.name}</li></Link>) : 
    <p>Loading...</p>


  return(
    <div>
      {projects}
      <button type="button" onClick={() => page > 1 ? setPage (page-1) : () => {return}}>Previous</button>
      <button type="button" onClick={() => projectData.length < 20 ? () => {return} : setPage (page+1) }>Next</button>
    </div>
  )
}
async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}
export default AllProjects;