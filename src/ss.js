import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card.js';
import Select from 'react-select';



function App() {
  const [Role, setRole] = useState("");
  const [NumberofEmployee, setNumberofEmployee] = useState("");
  const [Experience, setExperience] = useState("");
  const [Location, setLocation] = useState([]);
  const [MinBasePay, setMinBasePay] = useState("");
  const [selectedMinBasePay, setSelectedMinBasePay] = useState("");

  const [Search, setSearch] = useState("");
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


  const handleRoleChange = (selectedOptions) => {
    setRole(selectedOptions.map(option => option.value));
  };

  const handleLocationChange = (selectedOptions) => {
    // Extract values from selected options and set the Location state
    setLocation(selectedOptions.map(option => option.value));
  };

  const handleExpChange = (selectedOptions) => {
    setExperience(selectedOptions.map(option => option.value));
  };

  const handleMinBasePayChange = (selectedOptions) => {
    setSelectedMinBasePay(selectedOptions.map(option => option.value));
  };
  
  
  
  // Custom styles for react-select
// Custom styles for react-select
// Custom styles for react-select
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black', // Set the text color based on selection
    backgroundColor: state.isSelected ? '#007bff' : 'white', // Set background color based on selection
    textAlign: 'left', // Align text to the left
    '&:hover': {
      backgroundColor: '#f8f9fa', // Change background color on hover
      color: 'blue', // Change text color on hover
    },
  }),
};



  return (
    <div className="App">
      <header className="App-header">
        <Select
          isMulti
          options={[
            { value: 'android', label: 'android' },
            { value: 'ios', label: 'ios' },
            { value: 'tech lead', label: 'tech lead' },
            { value: 'backend', label: 'backend' },
            { value: 'frontend', label: 'frontend' }
          ]}
          placeholder="Role"
          onChange={handleRoleChange}
          styles={customStyles} 
        />
        {/* Other dropdowns */}
        <select className="dropdown empl_num ">
          <option value="" disabled hidden selected >Number of Employees</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>
          <option value="">Dropdown 1</option>

          {/* Add more options here */}
        </select>
        <Select
  isMulti
  options={[
    { value: '1', label: '1 year' },
    { value: '2', label: '2 years' },
    { value: '3', label: '3 years' },
    { value: '4', label: '4 years' },
    { value: '5', label: '5 years' },
    { value: '6', label: '6 years' },
    { value: '7', label: '7 years' },
    { value: '8', label: '8 years' },
    { value: '9', label: '9 years' },
    { value: '10', label: '10 years' }
  ]}
  placeholder="Experience"
  onChange={handleExpChange}
  styles={customStyles} 
/>

        <Select
          isMulti
          options={[
            { value: 'bangalore', label: 'Bangalore' },
            { value: 'mumbai', label: 'Mumbai' },
            { value: 'delhi ncr', label: 'Delhi NCR' },
            { value: 'chennai', label: 'chennai' },
            { value: 'remote', label: 'remote' }
          ]}
          placeholder="Location"
          onChange={handleLocationChange}
          styles={customStyles} 
        />

<Select
  isMulti
  options={[
    { value: '0', label: '0 LPA' },
    { value: '10', label: '10 LPA' },
    { value: '20', label: '20 LPA' },
    { value: '30', label: '30 LPA' },
    { value: '40', label: '40 LPA' },
    { value: '50', label: '50 LPA' },
    { value: '60', label: '60 LPA' },
    { value: '70', label: '70 LPA' },
    { value: '80', label: '80 LPA' },
    { value: '90', label: '90 LPA' },
    { value: '100', label: '100 LPA' },
    { value: '10', label: '100 LPA' },


    // Add more options as needed
  ]}
  placeholder="Minimum Base Pay"
  onChange={handleMinBasePayChange}
  styles={customStyles}
/>
        <div className="search-container">
          <input value={Search} onChange={(e) => setSearch(e.target.value)} type="text" className="search" placeholder="Search..." />
        </div>
      </header>
      <br></br>
      <div className="cards-container">
        <div className="card-row">
          {jobs
            .filter(job => (Role.length === 0 || Role.includes(job.jobRole)))
            .filter(job => (
              (Experience.length === 0) ||
              (job.minExp !== null && Experience.some(exp => parseInt(exp) >= parseInt(job.minExp)))
            ))
            
            .filter(job => (Location.length === 0 || Location.includes(job.location)))
            .filter(job => (job.jdUid.includes(Search)))
            .filter(job => (
              (selectedMinBasePay.length === 0) ||
              (job.minJdSalary && selectedMinBasePay.some(min => parseInt(min) <= parseInt(job.minJdSalary)))
            ))
            .map(job => (
              <Card
                key={job.jdUid}
                Name={job.jdUid}
                title={job.jobRole}
                content={`Job Description: ${job.jobDetailsFromCompany}`}
                minPay={job.minJdSalary}
                maxPay={job.maxJdSalary}
                location={job.location}
                experience={job.minExp}
                buttonText="Easy Apply"
                buttonText2=" Unlock Referral asks"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
