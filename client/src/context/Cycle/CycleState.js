import React, { useContext, useReducer } from "react";
import CycleContext from "./CycleContext";
import CycleReducer from "./CycleReducer";
import axios from "axios";
export default function CycleState(props) {
  const initialState = {
    cycles: null,
    loading: true,
    successMessage: null,
    bookedCycle: [],
  };

  const loadCycle = async () => {
    try {
      const res = await axios.get(`/api/cycle`);
      console.log(res.data);
      dispatch({
        type: "LOAD_CYCLE",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const bookCycle = async (form) => {
    try {
      const res = await axios.post(`/api/bookcycle`, form);
      dispatch({
        type: "BOOK_CYCLE",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getBookedCycle = async () => {
    try {
      const res = await axios.get(`/api/bookcycle`);

      dispatch({
        type: "GET_BOOK_CYCLE",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearSuccessMessage = async () => {
    dispatch({ type: "CLEAR_SUCCESS_MESSAGE" });
  };
  const [state, dispatch] = useReducer(CycleReducer, initialState);

  return (
    <CycleContext.Provider
      value={{
        cycles: state.cycles,
        loading: state.loading,
        successMessage: state.successMessage,
        bookedCycle: state.bookedCycle,
        loading: state.loading,

        loadCycle,
        bookCycle,
        clearSuccessMessage,
        getBookedCycle,
      }}
    >
      {props.children}
    </CycleContext.Provider>
  );
}
