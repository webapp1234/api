import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Api = () => {
  const [user, setuser] = useState([]);
  const [input, setinput] = useState({});
  const [view, setview] = useState({});

  let navigate = useNavigate();

  //for get user data
  async function getUsers() {
    let res = await axios.get("http://localhost:3001/users");
    console.log(res.data);
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
    navigate("/cart");
  }

  //for delete data
  async function deleteData(id) {
    console.log(id);
    await axios.delete(`http://localhost:3001/users/${id}`);
    setuser(user.filter((val) => val.id != id));
  }

  //update
  //view data
  function viewData(index) {
    console.log(index);
    let data = user[index];
    console.log(data);
    setview(data);
  }

  async function updateData() {
    console.log(view);

    let res = await axios.put(`http://localhost:3001/users/${view.id}`, view);
    console.log(res);

    setuser(user.map((val, index) => (val.id == view.id ? { ...view } : val)));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <input type="text" name="firstname" onChange={handle} />
      <input type="text" name="lastname" onChange={handle} />

      <button onClick={saveUser}>Add</button>
      <br />
      <br />
      <br />

      {/* modal */}
      <input
        type="text"
        name="firstname"
        value={view.firstname}
        onChange={(e) => setview({ ...view, [e.target.name]: e.target.value })}
      />
      <input
        type="text"
        name="lastname"
        value={view.lastname}
        onChange={(e) => setview({ ...view, [e.target.name]: e.target.value })}
      />

      <button onClick={updateData}>update</button>
      <br />
      <br />
      <br />
      <table border={1} cellPadding={"10px"}>
        <thead>
          <th>id</th>
          <th>FirstName</th>
          <th>LastName</th>
        </thead>
        <tbody>
          {user.map((val, index) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>

                <button onClick={() => deleteData(val.id)}>Delete</button>
                <button onClick={() => viewData(index)}>view</button>
                <button>
                  <Link to={"/cart"}>Cart</Link>
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Api;
