import React, { useContext, useEffect } from "react";
import logo from "../Images/mybyc_logo.png";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/User/UserContext";
import Spinner from "./Spinner";

export default function Navbar(props) {
  let history = useHistory();
  const { loadUser, isAuthenticated, user, logout, loading } = useContext(
    UserContext
  );

  const onClick = () => {
    logout();
    history.push("/");
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <img
              src={logo}
              className="img-fluid mr-5"
              alt="manin"
              width="50px"
            />

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to="/" className="nav-link font-large hovered" href="#">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/aboutus"
                    className="nav-link font-large hovered"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                {isAuthenticated && (
                  <li className="nav-item">
                    <Link
                      to="/bookdetails"
                      className="nav-link font-large hovered"
                      href="#"
                    >
                      Book Details
                    </Link>
                  </li>
                )}
              </ul>

              {!isAuthenticated ? (
                <form className="form-inline my-2 my-lg-0">
                  <div className="text-center ">
                    <Link to="/signup">
                      <button
                        type="submit"
                        className="cycle-btn"
                        style={{ width: "100px" }}
                      >
                        Sign Up
                      </button>
                    </Link>
                  </div>
                  <div className="text-center mx-3 ">
                    <Link to="/signin">
                      <button
                        type="submit"
                        className="cycle-btn"
                        style={{ width: "100px" }}
                      >
                        Sign In
                      </button>
                    </Link>
                  </div>
                </form>
              ) : (
                <div className="d-flex justify-content-between">
                  <h4 className="nav-link font-large" className="mr-5 t-white">
                    Welcome,&nbsp;
                    <span className="t-orange">{user && user.name}</span>
                  </h4>
                  <button
                    className="cycle-btn"
                    style={{ width: "100px" }}
                    onClick={onClick}
                  >
                    logout
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
