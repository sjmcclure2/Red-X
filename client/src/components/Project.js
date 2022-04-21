import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import { assignCategory } from './Requests';
import '../styles/card.css';
import { BASE_URL } from '../App';

export default function Project() {
  const {id} = useParams();
  const [project, setProject] = useState([]);
  const [projectOwner, setProjectOwner] = useState();

  useEffect(() => {
<<<<<<< HEAD:client/src/components/Project.js
    fetchJSON(`${BASE_URL}/projects/${id}`)
    .then(data => {
      setProject(data)
    })
    .then(fetchJSON(`${BASE_URL}/project_owners/${id}`)
=======
    fetchData(BASE_URL + `/projects/${id}`)
    .then(data => {
      setProject(data)
    })
    .then(fetchData(BASE_URL + `/project_owners/${id}`)
>>>>>>> 42cc8e3bedbf61c0d7a55f2fa56d7b4665193b48:client/src/components/projectCard.js
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
          <p>Id: {project?.[0]?.id}</p>
          <p>Title: {project?.[0]?.name}</p>
          <p>Last Activity: {project?.[0]?.last_activity_at}</p>
          <p>Status: {project?.[0]?.status}</p>
          <p>Category: {assignCategory(project?.[0]?.category_id)}</p>
          <p>{project?.[0]?.description}</p>
          <p>Repos: {project?.[0]?.ssh_url_to_repo}</p> 
          <p><a href={project?.[0]?.web_url}>{project?.[0]?.web_url}</a></p>
      </div>
    </div>
  )
}
