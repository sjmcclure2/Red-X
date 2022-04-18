import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/home';
import Header from './components/header';
import Requests from './components/request';
import Login from './components/login';
import AllProjects from './components/allProjects';
import ProjectCard from "./components/projectCard";
import useToken from './components/useToken';
import logo from './logo.svg';
import './App.css';

 function App () {

  const [data, setData] = useState(null);
  const [url, setUrl] = useState('http://localhost:8080/api');
  const { token, setToken } = useToken();

  // function isValidToken(token) {
  //   if(token) {
  //   if(token.token == 'test123')
  //     return true
  //   } else
  //     return false
  // }

  useEffect(() => {
    fetchData(url)
      .then(data => {
        setData(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);
  // if(!token) {
  //   return <Login url={url} setToken={setToken} />
  // }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={!data ? "Loading..." : <Homepage data={data} />}/>
          <Route path="/projects/" element={<AllProjects />} />
          <Route path="/requests/" element={<Requests />} />
          <Route path="/projectCard/:id" element={<ProjectCard />}/>
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
