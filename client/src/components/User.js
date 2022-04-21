import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import '../styles/card.css'

export default function User() {
  const { id } = useParams();
  const [ user, setUser ] = useState({});

  useEffect(() => {
    fetchJSON(`${BASE_URL}/users/${id}`)
    .then(([ user ]) => {
      setUser(user)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [ id ]);

  return (
    <>
      {user.id ? 
      <div className='card'>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
      </div> :
      <div>Loading....</div>
      }
    </>
  );
};
