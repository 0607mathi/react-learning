import React, { useState } from "react";

export const Regform1 = () => {
  const [user, setUser] = useState({
    name: "Mathiyarasu",
    age: 21,
    gender: "Male",
    isMarried: false,
    country: "India",
    about: "Full Stack Developer",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="conatiner">
      {/* table */}
      <table>
        <tbody>
          <tr>
            <td colSpan={2} className="heading">
              <h2> User Details </h2>
            </td>
          </tr>
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
       <u><h3>Enter Your Details</h3></u>
        <label htmlFor="name">
          <p>Name : </p>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="age">
          <p>Age : </p>
          <input
            type="text"
            name="age"
            id="age"
            value={user.age}
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="gender">
          <p>Gender : </p>
          <div>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="Male"
              checked={user.gender == "Male"}
              onChange={changeHandler}
            />
            <p>Male</p>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="Female"
              checked={user.gender == "Female"}
              onChange={changeHandler}
            />
            <p>Female</p>
          </div>
        </label>

        <label htmlFor="isMarried">
          <p>Is Married</p>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            checked={user.isMarried}
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="country">
          <p>Country : </p>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={changeHandler}
          >
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Canada">Canada</option>
            <option value="Russia">Russia</option>
          </select>
        </label>
        <p>About :</p>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="5"
          onChange={changeHandler}
          placeholder="write something about you"
        ></textarea>
      </form>
    </div>
  );
};
