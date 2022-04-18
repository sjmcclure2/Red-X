import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/requests.css';


//id, user_id, description, category_id, is_resolved, priority

function Requests() {
  const url = 'http://localhost:8080/api/'
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);

  function getUsers() {
    requests.map((request) => 
    fetch(url + `users/${request.user_id}`)
      .then(res => res.json())
      .then(data => setUsers(data))
    )}
  
  useEffect(() => {
    fetch(url + '/requests/')
    .then(res => res.json())
    .then(data => setRequests(data)
    )
    .then(getUsers())
    .catch((err) => { 
      console.log(err);
    })     
  }, []); 


  return(
    <div className='requests'>
      <h1>Requests Page</h1>
      {requests.map((request, index) => 
        <p>{request?.description}<br/>
        {request?.category_id}<br/>
        {request?.priority}<br/>
        {users?.[index]?.username}<br/>
        </p> 
      )}
    </div>
  )
}

export default Requests;