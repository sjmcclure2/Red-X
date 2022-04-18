import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


function Header() {

  return(
    <div className="ruledHeader">
    <header className="Header">
      <h1 className='HeaderTitle'>RED-X</h1>
      <label className="links">
        <Link to={'/'}>Home</Link> |
        <Link to={'/Projects/'}> Projects</Link> |
        <Link to={'/Requests/'}> Requests</Link> |
      </label>
      <button type="button">Logout</button>
      {/* <Link to={'/UserProfile/'}>UserProfile</Link> */}

    </header>
    <hr className='Rule'/>
  </div>
  )
}

export default Header;