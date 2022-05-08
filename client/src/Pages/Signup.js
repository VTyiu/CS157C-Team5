import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rank, setRank] = useState("");
  const [listOfUsers, setListOfUsers] = useState([]);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: name,
      email: email,
      password: password,
      rank: rank,
    }).then(() => {
      setListOfUsers([...listOfUsers, { name, email, password, rank }]);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch(() => {
        console.log("ERR");
      });
  }, []);

  return (
    <div className="App">
      <div className="userInputs">
        <form>
          <input
            value={name}
            type="text"
            placeholder="Username..."
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <input
            value={email}
            type="text"
            placeholder="Email..."
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            value={password}
            type="text"
            placeholder="Password..."
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <input
            value={rank}
            type="text"
            placeholder="Rank..."
            onChange={(event) => {
              setRank(event.target.value);
            }}
          />
          <br />
          {/* <input type="submit" value ="Create User"/> */}
          <button onClick={createUser}> Create User </button>
        </form>
      </div>
      <div className="showUsers">
        {listOfUsers.map((val) => {
          return (
            <div className="userContainer">
              <div className="user">
                <h3> Name: {val.name}</h3>
                <h3> Email: {val.email}</h3>
                <h3> Password: {val.password}</h3>
                <h3> Rank: {val.rank}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Signup;
