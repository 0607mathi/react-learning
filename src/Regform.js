import React, { useState } from "react";

export const Regform = () => {
  const [user, setUser] = useState({
    name: "Mathiyarasu",
    age: 21,
    gender: "Male",
    isMarried: true,
    country: "US",
    about: "No Data",
  });

  const changeHandler = (e) => {
    // setUser({...user,[e.target.name]:e.target.value})
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <h2>
        <u>User Table</u>
      </h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{user.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <th>Is Married</th>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{user.country}</td>
          </tr>
          <tr>
            <th>About</th>
            <td>{user.about}</td>
          </tr>
        </tbody>
      </table>

      {/* form */}
      <form action="">
        <h3>
          <u>Enter the User Details</u>
        </h3>
        <label htmlFor="name" id="name">
          Name :
          <input
            value={user.name}
            onChange={changeHandler}
            type="text"
            id="name"
            name="name"
          />
        </label>

        <label htmlFor="age" id="age">
          Age :
          <input
            value={user.age}
            onChange={changeHandler}
            type="text"
            id="age"
            name="age"
          />
        </label>

        <label htmlFor="gender">
          Gender :
          <input
            value="Male"
            onChange={changeHandler}
            type="radio"
            name="gender"
            id="gender"
            checked={user.gender == "Male"}
          />{" "}
          <span>Male</span>
          <input
            value="Female"
            onChange={changeHandler}
            type="radio"
            name="gender"
            id="gender"
            checked={user.gender == "Female"}
          />{" "}
          <span>Female</span>
        </label>

        <label htmlFor="isMarried" id="isMarried">
          {" "}
          Is Married
          <input
            onChange={changeHandler}
            type="checkbox"
            name="isMarried"
            id="isMarried"
            checked={user.isMarried}
          />
        </label>
        <label htmlFor="country">
          Country :
          <select name="country" id="country" onChange={changeHandler} value={user.country}>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Canada">Canada</option>
            <option value="US">US</option>
          </select>
        </label>
        <textarea name="about" id="about" cols="30" rows="5" placeholder="write something about you" onChange={changeHandler}></textarea>
      </form>
    </>
  );
};
