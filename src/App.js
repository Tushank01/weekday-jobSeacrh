import React from 'react';
import './App.css';
import Card from './Card.js'

function App() {


  
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
      <Card
            title="Card 1"
            content="Job Description 1: Lorem ipsum dolor sit amet.Consectetur adipiscing elitConsectetur adipiscing elit"
            buttonText="Apply"
          />
          
           </div>
      </div>
    </div>
  );
}

export default App;
