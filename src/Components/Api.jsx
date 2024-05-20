import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [user, setuser] = useState([]);
  const [input, setinput] = useState({});

  //for get user data
  async function getUsers() {
    let res = await axios.get("http://localhost:3001/users");

    setuser(res.data);
  }

  //for handle input
  function handle(e) {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  //for save user
  async function saveUser() {
    let res = await axios.post("http://localhost:3001/users", input);
    console.log(res);
    setuser([...user, res.data]);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <input type="text" name="firstname" onChange={handle} />
      <input type="text" name="lastname" onChange={handle} />
      <input type="text" name="age" onChange={handle} />
      <input type="text" name="email" onChange={handle} />
      <input type="text" name="password" onChange={handle} />
      <button onClick={saveUser}>Add</button>
      <br />
      <br />
      <br />
      <table border={1} cellPadding={"10px"}>
        <thead>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>Email</th>
          <th>Password</th>
        </thead>
        <tbody>
          {user.map((val, index) => {
            return (
              <tr>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.age}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api;
