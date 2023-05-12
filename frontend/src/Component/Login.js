import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const empty = {
    email: "",
    password: "",
  };
  const Navigate = useNavigate();
  // state for handle the login inputs

  const [handle, setHandle] = useState(empty);

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };

  //function for login
  const loginApi = async () => {
    if (handle.email === "" || handle.password === "") {
      alert("Please Enter the Fields First");
    } else {
      let record = await fetch("http://localhost:6100/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      console.log(record);
      record = await record.json();
      if (record.message === "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id);
        sessionStorage.setItem("userEmail", record.LoginUser.email);
        sessionStorage.setItem("name", record.LoginUser.name);
        alert("Login Successfully");
        Navigate("/home");
      } else {
        alert("Username and Password is invalid");
      }
    }
  };

  return (
    <div id="logreg-forms">
      <h1
        className="h3 mb-3 font-weight-normal"
        style={{ textAlign: "center" }}
      >
        Sign in
      </h1>
      {/* <div className="social-login">
      <button className="btn facebook-btn social-btn" type="button">
        <span>
          <i className="fab fa-facebook-f" /> Sign in with Facebook
        </span>
      </button>
      <button className="btn google-btn social-btn" type="button">
        <span>
          <i className="fab fa-google-plus-g" /> Sign in with Google+
        </span>
      </button>
    </div> */}
      <p style={{ textAlign: "center" }}> OR</p>
      <input
        name="email"
        onChange={loginHandler}
        type="email"
        className="form-control"
        placeholder="Email address"
      />
      <input
        name="password"
        onChange={loginHandler}
        type="password"
        className="form-control"
        placeholder="Password"
      />
      <button
        className="btn btn-success btn-block"
        onClick={loginApi}
        type="submit"
      >
        <i className="fas fa-sign-in-alt" /> Login
      </button>
      <Link to="/forgetpassword">
        {" "}
        <a href="#" id="forgot_pswd">
          Forgot password?
        </a>
      </Link>
      <hr />
      {/* <p>Don't have an account!</p>  */}
      <Link to="/signup">
        <button className="btn btn-primary btn-block">
          <i className="fas fa-user-plus" /> Sign up New Account
        </button>
      </Link>

      <br />
    </div>
  );
};
