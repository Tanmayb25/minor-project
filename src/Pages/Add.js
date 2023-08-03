import React from 'react';
import Table from 'react-bootstrap/Table';

function addparameter(){
    
}

function Add() {
  return (
    <div>
      <h3>Product name:</h3>
      <input></input>
      <button onClick={addparameter}>Add parameter</button>
      <button>Save</button>

      <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>max</th>
          <th>min</th>
          <th>unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><input></input></td>
          <td><input></input></td>
          <td><input></input></td>
          <td><input></input></td>
        </tr>
      </tbody>
    </Table>

    </div>
  )
}

export default Add
