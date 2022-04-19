import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/header.css';


function Header() {

  return(
    <div className="ruledHeader">
    <header className="Header">
      <Link to='/'>
        <h1 className='HeaderTitle'>Red-X</h1>
      </Link>
      <label className="links">
          <Link to={'/'}>Home</Link> |
          <Link to={'/Projects/'}> Projects</Link> |
          <Link to={'/Requests/'}> Requests</Link> 
      </label>
      <div className="buttonContainer">
        <button type="button">Logout</button>
      </div>
      {/* <Link to={'/UserProfile/'}>UserProfile</Link> */}

    </header>
    <hr className='Rule'/>
  </div>
  )
}

export default Header;