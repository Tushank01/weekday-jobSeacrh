import React from 'react';
import './App.css';
import Card from './Card.js'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "limit": 10,
        "offset": 0
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
      };

      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const data = await response.json();
        setJobs(data.jdList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);
  


  return (
    <div className="App">
      <header className="App-header">
        <select className="dropdown  role">
          <option value="">Role</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <select className="dropdown empl_num ">
          <option value="">Number of Employees</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <select className="dropdown">
          <option value="">Experince</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <select className="dropdown">
          <option value="">Remote</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <select className="dropdown empl_num ">
          <option value="">min base pay salary</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <div className="search-container">
          <input type="text" className="search" placeholder="Search..." />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>

      </header>
      <br>
      </br>
      <div className="cards-container">
      <div className="card-row">
      {jobs.map(job => (
            <Card
              key={job.jdUid}
              Name={job.jdUid}
              title={job.jobRole}
              content={`Job Description: ${job.jobDetailsFromCompany}`}
              location={job.location}
              buttonText="Apply"
            />
          ))}
           </div>
      </div>
    </div>
  );
}

export default App;
