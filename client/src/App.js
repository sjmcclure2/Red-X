import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Home';
import Header from './components/Header';
// import Login from './components/login';
import Projects from './components/Projects';
import Project from "./components/Project";
import Requests from './components/Requests';
import Request from './components/Request';
import NewRequest from "./components/NewRequest";
import Search from './components/Search';
// import Users from './components/Users';
import User from './components/User';
// import useToken from './components/useToken';
// import logo from './logo.svg';
import './App.css';

export const BASE_URL = 'https://red-x-server.herokuapp.com/api';

export const fetchJSON = url => fetch(url).then(r => r.json());

export default function App () {

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
          <Route path="/projects/" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />}/>
          <Route path="/requests/" element={<Requests />} />
          <Route path="/requests/:id" element={<Request />} />
          <Route path="/requests/new" element={<NewRequest />}/>
          {/* <Route path="/users" element={<Users />}/> */}
          <Route path="/users/:id" element={<User />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </Router>
    </div>
  );
};
