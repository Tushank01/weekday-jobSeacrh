// View.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook

function View() {
  const { id } = useParams(); // Get the job ID from the URL params

  // Fetch job details based on the ID and render the details
  
  return (
    <div>
      <h2>View Job Details</h2>
      <p>Job ID: {id}</p>
      {/* Render other job details here */}
    </div>
  );
}

export default View;
