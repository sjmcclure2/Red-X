import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProjectCard() {
  const {id} = useParams();
  const [project, setProject] = useState([]);
  const [url, setUrl] = useState('http://localhost:8080/api');

  useEffect(() => {
    fetchData(url + `/projects/${id}`)
    .then(data => {
      setProject(data)
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  console.log(project);
  return(
    <div>
      <p>{project?.[0]?.id}</p>
      <p>{project?.[0]?.name}</p>
      <p>{project?.[0]?.last_activity_at}</p>
      <p>{project?.[0]?.status}</p>
    </div>
  )
}

async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}

export default ProjectCard;