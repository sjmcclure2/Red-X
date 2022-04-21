import React from 'react'
import { Link } from 'react-router-dom';
import search from './search.svg';
import '../styles/header.css';
// import { BASE_URL, fetchJSON } from '../App';


export default function Header() {

  return(
    <header className="Header">
      <Link to='/'>
        <h1 className='HeaderTitle'>Red-X</h1>
      </Link>
      <label className="links">
          <Link to={'/'}>Home</Link> |
          <Link to={'/projects/'}> Projects</Link> |
          <Link to={'/requests/'}> Requests</Link> 
      </label>
      <div className="buttonContainer">
        <form action="/search">
          <label>
            <input
              type="search"
              name="query"
              placeholder="Search..."
              required
            />
          </label>
          <button>
            <img src={search} height="12px" alt="" />
          </button>
        </form>
      </div>
    </header>
  )
};
