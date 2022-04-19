import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/home';
import Header from './components/header';
import Requests from './components/Requests';
// import Login from './components/login';
import AllProjects from './components/allProjects';
import ProjectCard from "./components/projectCard";
// import useToken from './components/useToken';
// import logo from './logo.svg';
import NewRequest from "./components/newRequest";
import './App.css';

export const BASE_URL = 'http://localhost:8080/api';

export const fetchJSON = url => fetch(url).then(r => r.json());

function App () {

  const [ data, setData ] = useState(null);
  const [ url ] = useState('http://localhost:8080/api');
  // const { token, setToken } = useToken();

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
  }, [url]);
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
          <Route path="/requests/newRequest" element={<NewRequest />}/>
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
