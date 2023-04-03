import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [gender, setGender] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=5&gender=${gender}`
        );
        const data = await response.json();
        setUserData(data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [gender]);

  const handleGenderClick = (gender) => {
    setGender(gender);
  };

  return (
    <div>
      <h1>Need a new identity ?</h1>
      <div>
        {["male", "female", "unknown"].map((g, index) => (
          <button
            key={index}
            className={`button ${g === gender ? "active" : ""}`}
            onClick={() => handleGenderClick(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {userData.map((user, index) => (
          <div key={index} className="user">
            <img src={user.picture.large} alt="User avatar" />
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
