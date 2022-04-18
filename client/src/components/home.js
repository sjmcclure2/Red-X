import React from 'react';
import '../styles/home.css';


function Homepage( { data } ) {
  return (
    <header className="App-header">
    <p>{data.message}</p>
      <h1 className='home-welcome'>Welcome to Red-X</h1>
      <h3 className='home-header-3'>A one stop shop for digital solutions</h3>
  </header>
  )
}

export default Homepage;
