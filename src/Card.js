import React from "react";
import { useDispatch } from "react-redux";
import { fetchJobDetails } from "./store/detailsReducer";
import jobImage from "./1630638631345.jpeg";
import BoltIcon from "@mui/icons-material/Bolt";

function Card({
  Name,
  title,
  content,
  location,
  experience,
  minPay,
  maxPay,
  logo,
  buttonText,
  buttonText2,
}) {

  const displaySalary =
    minPay !== null
      ? `Estimated Salary: ₹${minPay} - ₹${maxPay} LPA ✅`
      : `Estimated Salary: Up to ₹${maxPay} LPA ✅`;

  return (
    <div className="card">
      <div className="">
        <div className="">
          <img src={logo} alt="Job Image" className="job-image" />
        </div>
        
          <h3 className="Job-id">{Name}</h3>
          <h3 className="card-jobrole">{title}</h3>
          <h3 className="location">{location}</h3>
        
        <p className="estimate-salary">{displaySalary}</p>
      </div>
      <h3 className="about-company">About Company: </h3>
      <h5 className="about-us"> About us</h5>
      <div className="card-content">
        <p className="Job-content">{content}</p>
        <p className="view-jd">View job</p>
        <div className="card-gradient"></div> {/* Added gradient overlay */}
      </div>
      <p className="minpay">{minPay}</p>
      {experience !== null && (
        <div>
          <h3 className="minimum-exp">Minimum Experience</h3>
          <p className="experience">{experience} years</p>
        </div>
      )}
      <button className="custom-button green-button" >
        <span className="bold-icon">
          <BoltIcon />
        </span>
        {buttonText}
      </button>
      <button className="custom-button blue-button">{buttonText2}</button>
    </div>
  );
}

export default Card;
