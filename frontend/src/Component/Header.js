import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ Cart }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sessionData, setSessionData] = useState();
  const handleLogin = () => {
    // Perform login logic
    const name = sessionStorage.getItem("name");
    setSessionData(name);
    console.log(sessionData);
    setLoggedIn(true);
  };
  useEffect(() => {});
  const handleLogout = () => {
    // Perform logout logic
    sessionStorage.clear();
    setLoggedIn(false);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
          {" "}
          <img className="logo " src="/Logo/Logo.png" alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/store">
                Store
              </Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li class="nav-item active">
              <Link
                class="nav-link "
                to="checkout"
                tabindex="-1"
                aria-disabled="true"
              >
                Services
              </Link>
            </li>
          </ul>
          <form class="form-inline mr-5 pr-4">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>

            <div>
              {loggedIn ? (
                // User is logged in, show logout button
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-light ml-2 my-2 my-sm-0 dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {sessionData}
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="admin">
                      Admin
                    </a>
                    {/* {sessionData} */}
                    <a
                      className="dropdown-item"
                      onClick={handleLogout}
                      href="#"
                    >
                      logout
                    </a>
                  </div>
                </div>
              ) : (
                // User is not logged in, show login button
                <Link to="/login">
                  <button
                    onClick={handleLogin}
                    className="btn btn-outline-light ml-2 my-2 my-sm-0"
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>

            {/* <Link to="/login"> <button onClick={sessionStorage.clear()} class="btn btn-outline-light ml-2 my-2 my-sm-0">Logout</button></Link> */}

            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping text-light ml-2">{Cart}</i>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
