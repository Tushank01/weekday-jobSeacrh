import React from 'react';
import './App.css';
import Card from './Card.js'
import { useState } from 'react';
import { useEffect } from 'react';
// import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

function App() {
  const [Role, setRole]= useState("");
  const [NumberofEmployee, setNumberofEmployee]= useState("");
  const [Experience, setExperience]= useState("");
  const [Location, setLocation]= useState("");
  const [MinBasePay, setMinBasePay]= useState("");
  const [Search, setSearch]= useState("");

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "limit": 100,
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
        <select onChange={(e)=>setRole(e.target.value)} className="dropdown  role">
          <option value="" disabled hidden selected >Role</option>
          <option value="">All</option>
          <option value="android">android</option>
          <option value="frontend" >frontend</option>
          <option value="ios"  >ios</option>
          <option value="backend"  >backend</option>
          <option value="tech lead"  >tech lead</option>

        </select>
        <select className="dropdown empl_num ">
          <option value="" disabled hidden selected >Number of Employees</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>

          {/* Add more options here */}
        </select>
        <select className="dropdown">
          <option value="" disabled hidden selected >Experince</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <select onChange={(e)=>setLocation(e.target.value)} className="dropdown">
          <option value="" disabled hidden selected >Location</option>
          <option value="">All</option>
          <option value="mumbai"  >mumbai</option>
          <option value="bangalore" >bangalore</option>
          <option value="delhi ncr"   >delhi ncr</option>
          <option value="chennai"   >chennai</option>
          <option value="remote"  >remote</option>
        </select>

        <select className="dropdown empl_num ">
          <option value="" disabled hidden selected >min base pay salary</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          {/* Add more options here */}
        </select>
        <div className="search-container">
          <input value={Search} onChange={(e)=>setSearch(e.target.value)}  type="text" className="search" placeholder="Search..." />
        </div>

      </header>
      <br>
      </br>
      <div className="cards-container">
      <div className="card-row">
      {jobs
      .filter(job=>  ( Role==="" || job.jobRole===Role))
      .filter(job=> (Location==="" || job.location===Location))
      .filter(job=> (job.jdUid.includes(Search)))
      
      .map(job => (
            <Card
              key={job.jdUid}
              Name={job.jdUid}
              title={job.jobRole}
              content={`Job Description: ${job.jobDetailsFromCompany}`}
              location={job.location}
              buttonText="Apply"
              buttonText2="Referral"
            />
          ))}
           </div>
      </div>
    </div>
  );
}

export default App;
