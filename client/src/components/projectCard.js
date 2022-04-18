import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/card.css'

function ProjectCard() {
  const {id} = useParams();
  const [project, setProject] = useState([]);
  const [projectOwner, setProjectOwner] = useState();
  const [url, setUrl] = useState('http://localhost:8080/api');

  useEffect(() => {
    fetchData(url + `/projects/${id}`)
    .then(data => {
      setProject(data)
    })
    .then(fetchData(url + `/project_owners/${id}`)
      .then(data => {
        setProjectOwner(data)
      })
    )
    .catch((err) => {
      console.log(err);
    })
  },[]);

  console.log(project);
  return(
    <div className='cardHolder'>
      <div className='card'>
        <p>{project?.[0]?.id}</p>
        <p>{project?.[0]?.name}</p>
        <p>{project?.[0]?.last_activity_at}</p>
        <p>{project?.[0]?.status}</p>
        <p>{project?.[0]?.category_id}</p>
        <p>{project?.[0]?.description}</p>
        <p>{project?.[0]?.ssh_url_to_repo}</p> 
        <p><a href={project?.[0]?.web_url}>{project?.[0]?.web_url}</a></p>
      </div>
    </div>
  )
}

async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}

export default ProjectCard;