import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/home';
import Header from './components/header';
import Requests from './components/request'
import Login from './components/login'
import AllProjects from './components/allProjects'
import logo from './logo.svg';
import './App.css';


 function App () {

  const [data, setData] = useState(null);
  const [url, setUrl] = useState('http://localhost:8080/api');
  const [initData, setInitData] = useState('null');
  const [token, setToken] = useState();

  useEffect(() => {
    fetchData(url + '/projects')
      .then(data => {
        setInitData(data)
      })
    fetchData(url)
      .then(data => {
        setData(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  if(!token) {
    return <Login url={url} setToken={setToken} />
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={!data ? "Loading..." : <Homepage  data={data}/>}/>
          <Route path="/Projects/" element={<AllProjects initData={initData} />} />
          <Route path="/Requests/" element={<Requests />} />
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
