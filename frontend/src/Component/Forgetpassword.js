import React from "react";
import "./Forgetpassword.css";
import { Link } from "react-router-dom";
export const Forgetpassword = () => {
  return (
    <div className="forgetpassword">
      <form>
        <input
          type="email"
          id="resetEmail"
          className="form-control"
          placeholder="Email address"
          required=""
          autofocus=""
        />
        <button className="btn btn-primary btn-block" type="submit">
          Reset Password
        </button>
        <Link to="/login">
          <i className="fas fa-angle-left" /> Back
        </Link>
      </form>
    </div>
  );
};
