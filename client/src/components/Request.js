import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import {assignCategory, assignPriority} from './Requests'
import '../styles/card.css'

export default function Request() {
  const { id } = useParams();
  const [ request, setRequest ] = useState({});
  const [ user, setUser ] = useState({});

  useEffect(() => {
    fetchJSON(`${BASE_URL}/requests/${id}`)
    .then(([ request ]) => {
      fetchJSON(`${BASE_URL}/users/${request.user_id}`)
      .then(([ user ]) => {
        setUser(user)
      })
      setRequest(request);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [ id ]);

  return(
    <>
      {request.id ? 
      <div className='card'>
          <p>Title: {request.title}</p>
          <p>Request Id: {request.id}</p>
          <p>User: {user.username}</p>
          <p>Description: {request.description}</p>
          <p>Category: {assignCategory(request.category)}</p>
          <p>Priority: {assignPriority(request.priority)}</p>
          <p>Status: {request.is_resolved ? 'Resolved' : 'Unresolved'}</p>
      </div>: <div>Loading....</div>}
    </>
  )
}
