import React, { useEffect, useState } from "react";
import ProjectCard from './projectCard'

function AllProjects({ initData }) {
  console.log(initData)
  const [projectData, setProjectData] = useState('null');
  const [page, setPage] = useState('1');
  const [url, setUrl] = useState('http://localhost:8080/api')

  useEffect(() => {
    fetchData(url + `?limit=20&offset=${20*(page-1)}`)
    .then(data => setProjectData(data))
    .catch((err) => {
      console.log(err);
    })
  },[page]);

  const projects = initData.map(project => <ProjectCard project={project} />)





  return(
    <div>
      <button type="button" onClick={() => page > 1 ? setPage (page-1) : () => {return}}>Previous</button>
      <button type="button" onClick={() => projectData.length < 20 ? setPage (page+1) : () => {return}}>Next</button>
      {projects}
    </div>
  )
}
async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}
export default AllProjects;