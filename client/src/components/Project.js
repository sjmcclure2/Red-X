import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import { assignCategory } from './Requests';
import '../styles/card.css';

export default function Project() {
  const {id} = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchJSON(`${BASE_URL}/projects/${id}`)
    .then(data => {
      setProject(data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [ id ] );

  return(
    <div className='card'>
      <p>Id: {project?.[0]?.id}</p>
      <p>Title: {project?.[0]?.name}</p>
      <p>Last Activity: {project?.[0]?.last_activity_at}</p>
      <p>Status: {project?.[0]?.status}</p>
      <p>Category: {assignCategory(project?.[0]?.category_id)}</p>
      <p>{project?.[0]?.description}</p>
      <p>Repos: {project?.[0]?.ssh_url_to_repo}</p> 
      <p><a className="gitlab" href={project?.[0]?.web_url}>{project?.[0]?.web_url}</a></p>
    </div>
  )
}