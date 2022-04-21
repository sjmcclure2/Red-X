import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/header.css';
// import { BASE_URL, fetchJSON } from '../App';


function Header() {

  return(
    <div className="ruledHeader">
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
          <input
            type="search"
            name="query"
            placeholder="Search..."
            required
          />
          <button>Search</button>
        </form>
      </div>
      {/* <Link to={'/UserProfile/'}>UserProfile</Link> */}

    </header>
    {/* <hr className='Rule'/> */}
  </div>
  )
}

export default Header;