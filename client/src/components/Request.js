import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BASE_URL } from '../App';
import '../styles/card.css'
import {assignCategory, assignPriority} from './Requests'

function RequestCard() {
  const {id} = useParams();
  const [request, setRequest] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    fetchData(`${BASE_URL}/request/${id}`)
    .then(data => {
      setRequest(data)
    })
    .then(fetchData(`${BASE_URL}/users/${id}`)
      .then(data => {
        setUser(data)
      })
    )
    .catch((err) => {
      console.log(err);
    })
  },[]);

  return(
    <div className='cardHolder'>
      <div className='card'>
          <p>Id: {request?.[0]?.id}</p>
          <p>Description: {request?.[0]?.description}</p>
          <p>Category: {assignCategory(request?.[0]?.category)}</p>
          <p>Priority: {assignPriority(request?.[0]?.priority)}</p>
          <p>User: {user}</p>
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