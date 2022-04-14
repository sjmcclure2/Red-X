import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


 function App () {
  
  const [data, setData] = useState(null);
  const [url, setUrl] = useUrl('http://localhost:8080/api')
  useEffect(() => {
    fetchData(url)
      .then(data => {
        setData(data)
    })
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data.message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <Routes>
          <Route path="/"/>
          <Route path="/"/>
          <Route path="/"/>
        </Routes>
      </Router>
    </div>
  );
}


async function fetchData(url) {
  const response = await fetch(url)
  let data = await response.json();
  return data
}
export default App;
