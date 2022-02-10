import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/User/UserContext";
import { TextField } from "@material-ui/core";
import { to } from "gsap";
import CycleContext from "../../context/Cycle/CycleContext";
import Alert from "../Layout/Alert";

function Form({ cycle }) {
  const { user, loadUser } = useContext(UserContext);
  const {
    bookCycle,
    successMessage,
    clearSuccessMessage,
    loadCycle,
  } = useContext(CycleContext);

  console.log(cycle);
  const [form, setForm] = useState({
    image_url: cycle.image_url,
    name: "",
    email: user && user.email,
    dateTime: "",
    priceDetails: "",
    location: "",
  });

  //2021-03-19T21:59

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    bookCycle(form);
    setForm({
      image_url: cycle.image_url,
      name: "",
      email: user && user.email,
      dateTime: "",
      priceDetails: "",
      location: "",
    });
  };

  useEffect(() => {
    loadUser();
    loadCycle();
  }, []);

  if (successMessage) {
    setTimeout(() => {
      clearSuccessMessage();
    }, 4000);
  }
  return (
    <>
      <div className="row text-center">
        <div className="col-12 col-md-12 col-lg-6 ">
          {successMessage && <Alert successMessage={successMessage} />}
          <form onSubmit={onSubmit}>
            <div className="form-group ">
              <div className="d-flex justify-content-left">
                <label htmlFor="user_name">Name:</label>
              </div>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                type="text"
                className="form-control"
                placeholder="name"
                required
              />
            </div>

            <div className="form-group">
              <div className="d-flex justify-content-left">
                <label htmlFor="emiil">Email:</label>
              </div>
              <input
                name="email"
                type="email"
                className="form-control"
                value={form.email}
                onChange={onChange}
                disabled
              />
            </div>

            <div
              className="form-group d-flex justify-content-between"
              noValidate
            >
              <TextField
                name="dateTime"
                value={form.dateTime}
                onChange={onChange}
                id="Pickup"
                label="Pickup Date And Time"
                type="datetime-local"
                defaultValue={Date.now}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>

            <div className="form-group">
              <div className="d-flex justify-content-left">
                <label htmlFor="priceDetails">Price and Details</label>
              </div>

              <select
                onChange={onChange}
                value={form.priceDetails}
                className="form-control"
                id="priceDetails"
                name="priceDetails"
                required
              >
                <option value="">None</option>
                <option value={`3 hours - ${cycle.three_hour}`}>
                  3 hours - {cycle.three_hour}
                </option>
                <option value={` 24 hours - ${cycle.twentyfour_hour}`}>
                  24 hours - {cycle.twentyfour_hour}
                </option>
                <option value={`2nd day - ${cycle.second_day}`}>
                  2nd day - {cycle.second_day}
                </option>
                <option value={` 3rd – 5th day - ${cycle.three_four_day}`}>
                  3rd – 5th day - {cycle.three_four_day}
                </option>
                <option value={`6th day and up - ${cycle.six_day_more}`}>
                  6th day and up - {cycle.six_day_more}
                </option>
              </select>
            </div>

            <div className="form-group">
              <div className="d-flex justify-content-left">
                <label htmlFor="location">Pick Up Location:</label>
              </div>

              <select
                className="form-control"
                id="location"
                name="location"
                onChange={onChange}
                value={form.location}
                required
              >
                <option value="">None</option>
                <option value="CG Road">CG Road</option>
                <option value="Asharam Road">Asharam Road</option>
                <option value="SG Highway">SG Highway</option>
                <option value="Nikol">Nikol</option>
                <option value="Vastrapur">Vastrapur</option>
                <option value="Ranip">Ranip</option>
                <option value="Maninagar">Maninagar</option>
                <option value="Ghodasar">Ghodasar</option>
                <option value="Naroda">Naroda</option>
                <option value="Navrangpura">Navrangpura</option>
                <option value="Satellite">Satellite</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn cycle-btn"
              style={{ width: "150px" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
