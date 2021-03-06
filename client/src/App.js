import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/home';
import Header from './components/header';
import Requests from './components/Requests';
import RequestCard from './components/Request';
import Search from './components/Search';
// import Login from './components/login';
import AllProjects from './components/allProjects';
import ProjectCard from "./components/projectCard";
// import useToken from './components/useToken';
// import logo from './logo.svg';
import NewRequest from "./components/newRequest";
import './App.css';

export const BASE_URL = 'https://red-x-server.herokuapp.com/api';

export const fetchJSON = url => fetch(url).then(r => r.json());

function App () {
  // const { token, setToken } = useToken();

  // function isValidToken(token) {
  //   if(token) {
  //   if(token.token == 'test123')
  //     return true
  //   } else
  //     return false
  // }

  // if(!token) {
  //   return <Login url={url} setToken={setToken} />
  // }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/projects/" element={<AllProjects />} />
          <Route path="/projects/:id" element={<ProjectCard />}/>
          <Route path="/requests/" element={<Requests />} />
          <Route path="/requests/:id" element={<RequestCard />} />
          <Route path="/requests/newRequest" element={<NewRequest />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
