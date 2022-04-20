import React from 'react';
import { BASE_URL } from '../App';
 

function NewRequest() {


return(
  <div className='newRequest'>
    <h1>New Request</h1>
    <form action={BASE_URL + '/requests'} method='post'>
      <label>
        <p>Title</p>
        <input
          name="title"
          maxLength="255"
          required
          autoFocus/>
      </label>
      <label>
        <p>Description</p>
        <textarea
          name="description"
          cols="80"
          minLength="40"
          placeholder="Describe your request."
          rows="10"
          required
        />
      </label>
      <label>
        <p>Category</p>
        <select name="category_id">
          <option value="1">Administrative</option>
          <option value="2">Aircraft Maintenance</option>
          <option value="3">Aircraft Operations</option>
          <option value="4">Flightline Maintenance</option>
          <option value="5">Flightline Operations</option>
          <option value="6">Corrections/Upgrades</option>
          <option value="7">Other</option>
        </select>
      </label>
      <label>
       <p>Priority</p>
       <select name="priority">
          <option value="1">High</option>
          <option value="2">Routine</option>
          <option value="3">Low</option>
        </select>
      </label>
      <hr />
      <input type="submit" value="Submit" />
    </form>
  </div>
)}

export default NewRequest;