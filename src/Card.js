import React from 'react';
import {useDispatch} from 'react-redux';
import {fetchJobDetails} from './store/detailsReducer';
// import { IconButton } from '@mui/material';
// import {ElectricBoltIcon} from '@mui/icons-material/ElectricBolt'


function Card({ Name, title, content, location,experience,minPay, buttonText,buttonText2 }) {
  const dispatch=useDispatch();

  const handleClick = () => {
    const dataToSave={
      jbUid: Name,
      jobRole: title,
      jobDetailsFromCompany: content,
      location: location,
      minExp:experience,
      minJdSalary:minPay
    }
    dispatch(fetchJobDetails(dataToSave));
  }

  return (
    <div className="card">
      
      <h3 className="Job-id" >{Name}</h3>
      <h3 className="card-jobrole" >{title}</h3>
      
      <div className="card-content">
        <h3 className="location" ><strong>Location:</strong> {location}</h3>
        <h3 className="experience" >{experience}</h3>
        <h3>{minPay}</h3>
        <p className='Job-content' >{content}</p>
        <div className="card-gradient"></div> {/* Add gradient overlay */}
      </div>
      <button className="custom-button green-button" onClick={handleClick}>{buttonText}</button>
      <button className="custom-button blue-button">{buttonText2}</button>

    </div>
  );
}

export default Card;
