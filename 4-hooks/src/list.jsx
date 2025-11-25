import React, { useState, useEffect, useMemo } from 'react';
import './EmployeeList.css';

const employees = [
  {name: "Om Prajapati", role: "Developer"},
  {name: "Hog Rider", role: "Designer"},
  {name: "Bandit", role: "Manager"},
  {name: "Archer", role: "Developer"},
  {name: "Giant", role: "Designer"},
];

const EmployeeList = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  useEffect(() => {
    console.log("Filter parameters changed");
  }, [searchText, selectedRole]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchRole = selectedRole === "All" || emp.role === selectedRole;
      const matchName = emp.name.toLowerCase().startsWith(searchText.toLowerCase());
      return matchRole && matchName;
    });
  }, [searchText, selectedRole]);

  const getHighlightedText = (text, highlight) => {
    const lowerText = text.toLowerCase();
    const lowerHighlight = highlight.toLowerCase();

    if (highlight && lowerText.startsWith(lowerHighlight)) {
      return (
        <span>
          <b>{text.substring(0, highlight.length)}</b>
          {text.substring(highlight.length)}
        </span>
      );
    }
    return text;
  };

  return (
    <div className="container">
      <h2>Employee Directory</h2>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        
        <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
          <option value="All">All Roles</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp, index) => (
            <li key={index}>
              <span className="name">{getHighlightedText(emp.name, searchText)}</span>
              <span className="role">{emp.role}</span>
            </li>
          ))
        ) : (
          <li>No employees found</li>
        )}
      </ul>
    </div>
  );
};

export default EmployeeList;