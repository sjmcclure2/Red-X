import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import {assignCategory, assignPriority} from './Requests'
import '../styles/card.css'

function RequestCard() {
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
  },[]);

  return(
    <div className='cardHolder'>
      {request.id ? 
      <div className='card'>
          <p>Title: {request.title}</p>
          <p>Request Id: {request.id}</p>
          <p>User: {user.username}</p>
          <p>Description: {request.description}</p>
          <p>Category: {assignCategory(request.category)}</p>
          <p>Priority: {assignPriority(request.priority)}</p>
          <p>Status: {request.is_resolved.toString()}</p>
      </div>: <div>Loading....</div>}
    </div>
  )
}

async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}

export default RequestCard;

// [
//   {
//   "id": 501,
//   "user_id": null,
//   "title": "New Request 501",
//   "description": "Okay, which one of you broke it this time?",
//   "category_id": 1,
//   "priority": 1,
//   "is_resolved": false
//   }
// ]
