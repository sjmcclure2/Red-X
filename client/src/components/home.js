import React from 'react'


function Homepage( { data } ) {
  return (
    <header className="App-header">
    <p>{data.message}</p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  )
}

export default Homepage;
