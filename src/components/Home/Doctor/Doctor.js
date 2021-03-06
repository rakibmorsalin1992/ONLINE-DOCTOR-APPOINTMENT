import React from "react";
import { Link } from "react-router-dom";
import "./Doctor.css";

const Doctor = ({ doctor }) => {
  const { id, doctor_name, company_name, description, img, Country, Email } =
    doctor;
  return (
    <div className="doctor-info img-fluid pb-3">
      <img src={img} alt="" />
      <h3>{doctor_name}</h3>
      <h5>{company_name}</h5>
      <p>{description}</p>
      <p>{Country}</p>
      <p>{Email}</p>
      <Link to={`/appointment/${id}`}>
        <button className="btn ">Appointment</button>
      </Link>
    </div>
  );
};

export default Doctor;
