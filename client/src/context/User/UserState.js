import React, { useState, useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import axios from "axios";
import setAuthToken from "../../../src/utils/setAuthToken";

export default function UserState(props) {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  //Loaduser
  const loadUser = async () => {
    setAuthToken(localStorage.getItem("token"));

    try {
      const res = await axios.get("/api/auth");
      // console.log(res.data);
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: "AUTH_ERROR" });
    }
  };
  // Sign Up User
  const signup = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      console.log(res.data);
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: "SIGNUP_FAIL",
        payload: err.response.data.msg,
      });
    }
  };

  // Sign In User
  const signin = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: err.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: "LOGOUT" });

  //clear Error
  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        name: state.name,
        id: state.id,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        loading: state.loading,
        signup,
        signin,
        loadUser,
        logout,
        clearError,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
