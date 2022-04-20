import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, fetchJSON } from '../App';
import { assignCategory, assignPriority } from './Requests';

export default function Search() {

  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState({});

  useEffect(() => {
    const q = new URL(document.location).searchParams.get('query');
    setQuery(q);
    fetchJSON(`${BASE_URL}/search?query=${q}`)
    .then(data => setResults(data));
  }, []);

  return (
    <div className="search">
      <h1>Search results for "{query}"</h1>
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.projects?.map(project =>
            <tr key={project.id}>
              <td><Link to={`/projects/${project.id}`}>{project.id}</Link></td>
              <td><Link to={`/projects/${project.id}`}>{project.name}</Link></td>
              <td>{assignCategory(project.category_id)}</td>
              <td>{project.status}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Requests</h2>
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
          {results.requests?.map(request =>
            <tr key={request.id}>
              <td><Link to={`/requests/${request.id}`}>{request.id}</Link></td>
              <td><Link to={`/requests/${request.id}`}>{request.title}</Link></td>
              <td>{assignCategory(request.category_id)}</td>
              <td>{assignPriority(request.priority)}</td>
              <td>
                {/* <Link to={`/users/${request.user_id}`}> */}
                  {request.user_id}
                {/* </Link> */}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {results.users?.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};