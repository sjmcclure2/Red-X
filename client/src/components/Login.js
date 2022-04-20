import React, { useState } from 'react';
import PropTypes from 'prop-types'

async function loginUser(credentials, url) {
  return fetch(url + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
  .catch((err) => {
    console.log(err)
  })
}

function Login( { url, setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    }, url);
    console.log(token)
    if(token.status !== 404)
      setToken(token)
  }

  return(
    <div>
    <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange={event => setUserName(event.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={event => setPassword(event.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;