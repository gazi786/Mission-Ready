import React from "react";
import { NavLink } from "react-router-dom";
import useFetch from "./useFetch";

const Employees = () => {
  const {
    error,
    isPending,
    data: employees,
  } = useFetch(`http://localhost:4000/api/v1/employees`);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <h1>Employees</h1>
      </div>
      <div className="row justify-content-center align-items-center gap-5">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {employees &&
          employees.map((employee) => (
            <div className="col col-3 card" key={employee.employeeNumber}>
              <img
                src={employee.profilePic}
                className="card-img-top img-fluid rounded"
                style={{ marginTop: "2rem", maxHeight: "200px", width: "auto" }}
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
