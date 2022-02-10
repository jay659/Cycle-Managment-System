import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/User/UserContext";
import Alert from "../Layout/Alert";

export default function SignUp(props) {
  const { signup, isAuthenticated, error, clearError } = useContext(
    UserContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();

    signup({ name, email, password });
    setUser({
      name: "",
      email: "",
      password: "",
    });
  }

  if (error) {
    setTimeout(() => {
      clearError();
    }, 3000);
  }
  return (
    <>
      <div className="login-form">
        <div>
          {error && <Alert error={error} />}
          <form method="post" onSubmit={onSubmit}>
            <h1 className="text-center">Sign Up</h1>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                className="form-control"
                placeholder="Username"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="form-control"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                className="form-control"
                placeholder="Password"
                required="required"
              />
            </div>

            <div className="text-center ">
              <button
                type="submit"
                className="btn cycle-btn"
                style={{ width: "160px" }}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center">
            <a href="/signin" className="t-blue font-weight-bold">
              Sign In here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
