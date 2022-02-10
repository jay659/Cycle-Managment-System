import React, { useState, useContext, useEffect } from "react";
import Alert from "../Layout/Alert";
import UserContext from "../../context/User/UserContext";

export default function SignIn(props) {
  const { signin, isAuthenticated, error, clearError } = useContext(
    UserContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();

    signin({ email, password });
    setUser({
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
            <h1 className="text-center">Sign In</h1>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="btn cycle-btn "
                style={{ width: "160px" }}
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center t-blue">
            <a href="/signup" className="t-blue font-weight-bold">
              Sign Up here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
