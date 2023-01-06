import React from 'react';
import { useLocation } from 'react-router-dom';
const Display = () => {
  const recievedata = useLocation();
  console.log(recievedata, 'recievedata');
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          <tr key={recievedata.state.Age}>
            <td>{recievedata.state.Name}</td>
            <td>{recievedata.state.Age}</td>
            <td>{recievedata.state.Email}</td>
            <td>
              <img src={recievedata.state.Poster} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Display;
