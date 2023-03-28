import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { employeeNumber } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/employees/${employeeNumber}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data));
  }, [employeeNumber]);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <h1>Employee Details</h1>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-8 card">
          <img
            src={employee.profilePic}
            className="card-img-top"
            alt={employee.firstName + " " + employee.lastName}
          />
          <div className="card-body">
            <h5 className="card-title">
              {employee.firstName + " " + employee.lastName}
            </h5>
            <p className="card-text">Position: {employee.jobTitle}</p>
            <p className="card-text">Email: {employee.email}</p>
            <p className="card-text">Extension: {employee.extension}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
