import React from 'react';


function Card({ Name, title, content, location, buttonText }) {
  return (
    <div className="card">
      {/* <h3>{title}</h3> */}
      <h3>{Name}</h3>
      <div className="card-content">
        <p><strong>Location:</strong> {location}</p>
        <p>{content}</p>
        <div className="card-gradient"></div> {/* Add gradient overlay */}
      </div>
      <button className="custom-button green-button">{buttonText}</button>
    </div>
  );
}

export default Card;
