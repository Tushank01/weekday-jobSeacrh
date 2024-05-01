import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Card;
