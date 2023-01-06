import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from './Store';
const Customer = () => {
  const [search, setSearch] = useState('');
  let tableD = data.movies;
  const [filterdata, setFilterData] = useState(tableD);
  const navigate = useNavigate();
  const pagerow = (getdata) => {
    navigate('/display', { state: getdata });
  };
  console.log(filterdata, 'filterdata');
  const searching = (e) => {
    const searchstring = e.target.value;
    setSearch(searchstring);
    console.log(searchstring, 'string');
  };
  useEffect(() => {
    let sdata = data.movies.filter((item) => item.Name.includes(search));
    setFilterData(sdata);
  }, [search]);
  return (
    <div>
      <label>Search</label>
      <input type="search" placeholder="search" onChange={searching} />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {filterdata.map((item, idx) => (
            <tr key={idx} onClick={() => pagerow(item)}>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.Age}</td>
              <td>
                <img
                  src={item.Poster}
                  alt="image"
                  width="100px"
                  height="100px"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Customer;
