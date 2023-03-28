import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <h1>Employees</h1>
      </div>
      <div className="row justify-content-center align-items-center">
        {employees &&
          employees.map((employee) => (
            <div className="col col-3 card" key={employee.employeeNumber}>
              <img
                src={employee.profilePic}
                className="card-img-top"
                alt={employee.firstName + " " + employee.lastName}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {employee.firstName + " " + employee.lastName}
                </h5>
                <p className="card-text">{employee.jobTitle}</p>
                <NavLink
                  to={`/employees/${employee.employeeNumber}`}
                  className="btn btn-primary"
                >
                  View Employee Details
                </NavLink>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Employees;
