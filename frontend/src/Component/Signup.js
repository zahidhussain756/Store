import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
export const Signup = () => {
  const Navigate = useNavigate();
  // state for handling the inputs
  const empty = {
    name: "",
    email: "",
    password: "",
  };
  const [handle, setHandle] = useState(empty);
  const accountHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  const createUser = async () => {
    if (handle.name === "" || handle.email === "" || handle.password === "") {
      alert("Please Enter the Input Fields First");
    } else {
      let record = await fetch("http://localhost:6100/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();
      if (record === "Email Already Exist") {
        alert("Email Already Exist");
      } else {
        alert("User Created Successfully");
        Navigate("/login");
      }
    }
  };

  return (
    <div id="logreg-forms">
      <p style={{ textAlign: "center" }}>Register</p>
      <input
        type="text"
        name="name"
        id="user-name"
        className="form-control"
        onChange={accountHandler}
        placeholder="Full name"
        required=""
        autofocus=""
      />
      <input
        type="email"
        name="email"
        id="user-email"
        className="form-control"
        onChange={accountHandler}
        placeholder="Email address"
        required=""
        autofocus=""
      />
      <input
        type="password"
        id="user-pass"
        name="password"
        className="form-control"
        onChange={accountHandler}
        placeholder="Password"
        required=""
        autofocus=""
      />

      <button className="btn btn-primary btn-block" onClick={createUser}>
        {" "}
        <i className="fas fa-user-plus" /> Sign Up{" "}
      </button>
    </div>
  );
};
