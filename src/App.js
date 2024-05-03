import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card.js";
import SingleDropdown from "./SingleDropdown.js";
import MultiDropdown from "./MultiDropdown.js";
import { fetchJobsData } from "./api"; // Import a function to fetch job data from an API
import NoJobsFound from "./NoJobsFound.js"; 

function App() {
  // State variables to manage user selections and job data
  const [Role, setRole] = useState([]);
  const [CurrencyCode, setCurrencyCode] = useState("");
  const [Experience, setExperience] = useState(null);
  const [Location, setLocation] = useState([]);
  const [MinBasePay, setMinBasePay] = useState(null);
  

  const [Search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);

   
    // Fetch jobs data from API when component mounts
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const data = await fetchJobsData(); // Use the function to fetch data
          setJobs(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchJobs();
    }, []);

    // Options for dropdown menus
  const roleOptions = [
    { value: "android", label: "android" },
    { value: "ios", label: "ios" },
    { value: "tech lead", label: "tech lead" },
    { value: "backend", label: "backend" },
    { value: "frontend", label: "frontend" },
  ];

  const expOptions = [
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "6", label: "6 years" },
    { value: "7", label: "7 years" },
    { value: "8", label: "8 years" },
    { value: "9", label: "9 years" },
    { value: "10", label: "10 years" },
    // Add more options as needed
  ];

  const locationOptions = [
    { value: "bangalore", label: "Bangalore" },
    { value: "mumbai", label: "Mumbai" },
    { value: "delhi ncr", label: "Delhi NCR" },
    { value: "chennai", label: "chennai" },
    { value: "remote", label: "remote" },
  ];

  const minbaseOptions = [
    { value: "0", label: "0 LPA" },
    { value: "10", label: "10 LPA" },
    { value: "20", label: "20 LPA" },
    { value: "30", label: "30 LPA" },
    { value: "40", label: "40 LPA" },
    { value: "50", label: "50 LPA" },
    { value: "60", label: "60 LPA" },
    { value: "70", label: "70 LPA" },
    { value: "80", label: "80 LPA" },
    { value: "90", label: "90 LPA" },
    { value: "100", label: "100 LPA" },
  ];

  const currencyOptions = [
    { value: "INR", label: "INR" },
    { value: "CAD", label: "CAD" },
    { value: "USD", label: "USD" },
  ];

  return (
    <div className="App">
      {/* Dropdown selection section */}
      <div className="dropdown-collection">
        <header className="App-header">

          
          <MultiDropdown
            value={Role}
            placeholder={"Role"}
            Options={roleOptions}
            SetValue={(v) => setRole(v)}
          />

          <MultiDropdown
            value={CurrencyCode}
            placeholder={"Curreny Code"}
            Options={currencyOptions}
            SetValue={(v) => setCurrencyCode(v)}
          />

          <SingleDropdown
            value={Experience}
            placeholder={"Experience"}
            Options={expOptions}
            SetValue={(v) => setExperience(v)}
          />
          <MultiDropdown
            value={Location}
            placeholder={"Location"}
            Options={locationOptions}
            SetValue={(v) => setLocation(v)}
          />

          <SingleDropdown
            value={MinBasePay}
            placeholder={"Min Base Pay"}
            Options={minbaseOptions}
            SetValue={(v) => setMinBasePay(v)}
          />

          <div className="search-container">
          <input
  value={Search}
  onChange={(e) => setSearch(e.target.value.toLowerCase())} // Convert input value to lowercase
  type="text"
  className="search"
  placeholder="Search..."
/>
          </div>
        </header>
      </div>
       <br></br>
      {/* Job card display section */}
      <div className="cards-container">
        <div className="card-row">
          {jobs
            .filter(
              (job) =>
                Role.length === 0 ||
                Role.some((role) => role.value === job.jobRole)
            )
            .filter(
              (job) =>
                CurrencyCode.length === 0 ||
                CurrencyCode.some(
                  (currency) => currency.value === job.salaryCurrencyCode
                )
            )
            .filter(
              (job) =>
                Experience === null ||
                (job.minExp !== null &&
                  parseInt(Experience.value) >= parseInt(job.minExp))
            )
            .filter(
              (job) =>
                Location.length === 0 ||
                Location.some((location) => location.value === job.location)
            )
            .filter((job) => job.companyName.toLowerCase().includes(Search))

            .filter(
              (job) =>
                MinBasePay === null ||
                (job.minJdSalary !== null &&
                  parseInt(MinBasePay.value) <= parseInt(job.minJdSalary))
            )

            .map((job) => (
              <Card
                key={job.jdUid}
                Name={job.companyName}
                title={job.jobRole}
                content={`Job Description: ${job.jobDetailsFromCompany}`}
                minPay={job.minJdSalary}
                maxPay={job.maxJdSalary}
                location={job.location}
                experience={job.minExp}
                logo={job.logoUrl}
                buttonText="Easy Apply"
                buttonText2=" Unlock Referral asks"
              />
            ))}

          {/* Conditionally render message if no cards match the filters */}
          {jobs.length > 0 &&
            jobs
              .filter(
                (job) =>
                  Role.length === 0 ||
                  Role.some((role) => role.value === job.jobRole)
              )
              .filter(
                (job) =>
                  CurrencyCode.length === 0 ||
                  CurrencyCode.some(
                    (currency) => currency.value === job.salaryCurrencyCode
                  )
              )
              .filter(
                (job) =>
                  Experience === null ||
                  (job.minExp !== null &&
                    parseInt(Experience.value) >= parseInt(job.minExp))
              )
              .filter(
                (job) =>
                  Location.length === 0 ||
                  Location.some((location) => location.value === job.location)
              )
              .filter((job) => job.companyName.toLowerCase().includes(Search))
              .filter(
                (job) =>
                  MinBasePay === null ||
                  (job.minJdSalary !== null &&
                    parseInt(MinBasePay.value) <= parseInt(job.minJdSalary))
              ).length === 0 && <NoJobsFound />}
              
        </div>
      </div>
    </div>
  );
}

export default App;
