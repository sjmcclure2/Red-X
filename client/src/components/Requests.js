import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import '../styles/requests.css';


//id, user_id, description, category_id, is_resolved, priority

export function assignCategory(category) {
  switch(category) {
    case 1:
      return 'Admin'
    case 2:
      return 'Aircraft Mx'
    case 3:
      return 'Aircraft Ops'
    case 4:
      return 'Flightline Mx'
    case 5:
      return 'Flightline Ops'
    case 6:
      return 'Corrections/Upgrades'
    default:
      return 'Other'
  } 
}

export function assignPriority(priority) {
  switch(priority) {
    case 1:
      return 'High'
    case 2:
      return 'Routine'
    case 3:
      return 'Low'
    default:
      return 'Undefined'
  }  
}

function Requests() {

  const [ page, setPage ] = useState(1);
  const [ requests, setRequests ] = useState([]);
  // const [ users, setUsers ] = useState([]);
  // const [ categories, setCategories ] = useState([]);
  
  useEffect(() => { 
    fetchJSON(`${BASE_URL}/requests?offset=${(page - 1) * 20}`)
    .then(requests => {
      return requests.map(request => {
        fetchJSON(`${BASE_URL}/users/${request.user_id}`)
        .then(([{username}]) => request.username = username);
        return request;
      })
    })
    .then(requests => {
      setRequests(requests);
    })
    .catch((err) => { 
      console.log(err);
    })     
  }, [ page ]);

  return(
    <div className='requests'>
      <h1>Requests</h1>
      <div className='requestLinkContainer'>
        <Link to='newRequest'>Submit a new request</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Priority</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          { requests.map((request, index) => 
            <tr key={request.id}>
              <td><Link to={`${request.id}`}>{request.id}</Link></td>
              <td><Link to={`${request.id}`}>{request.title}</Link></td>
              <td>{assignCategory(request.category_id)}</td>
              <td>{assignPriority(request.priority)}</td>
              <td>
                <Link to={`/users/${request.user_id}`}>
                  {request.user_id}
                  {request.username}
                </Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button type='button' onClick={() => page > 1 ? setPage (page-1) : () => {return}}>Previous</button>
      <button type='button' onClick={() => requests.length < 20 ? () => {return} : setPage (page+1) }>Next</button>
    </div>
  )
}

export default Requests;


// function renderRequest(request) {
//   return {
//     <div>
//     {request.description}<br/>
//     Category: {assignCategory(request.category_id)}<br/>
//     Priority: {assignPriority(request.priotity)}<br/>
//     User: {getUserName(request.user_id)}<br/>
//     </div>
//   }
// }
// promiseArray = [];
// requests.map((request) => {
//   promiseArray.push(renderRequest(request))
// })
// Promise.all(promiseArray)
// .then(setAstate(promiseArray))