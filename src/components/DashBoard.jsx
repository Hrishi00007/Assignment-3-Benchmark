import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
const DashBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody key={data.id}>
        {data.length > 0 &&
          data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
export default DashBoard;
