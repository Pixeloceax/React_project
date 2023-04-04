import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [gender, setGender] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=5&gender=${gender}&inc=name,email,picture,login,dob,location,nat`
        );
        const data = await response.json();
        setUserData(
          data.results.map((user) => {
            const { first, last } = user.name;
            const email = user.email;
            const picture = user.picture.large;
            const age = user.dob.age;
            const dob = user.dob.date;
            const nationality = user.nat;
            const password = `${first.toLowerCase()}${last.toLowerCase()}${age}${nationality.toLowerCase()}`;
            const passwordStrength = password.length > 10 ? "strong" : "weak";
            return {
              first,
              last,
              email,
              picture,
              age,
              dob,
              nationality,
              password,
              passwordStrength,
            };
          })
        );
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
            <img src={user.picture} alt="User avatar" />
            <p>
              Name: {user.first} {user.last}
            </p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Nationality: {user.nationality}</p>
            <p>Date of Birth: {new Date(user.dob).toLocaleDateString()}</p>
            <p>
              Password: {user.password} ({user.passwordStrength})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
