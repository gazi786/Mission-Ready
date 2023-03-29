import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const EmployeeDetails = () => {
  const { employeeNumber } = useParams();
  const navigate = useNavigate();
  const {
    data: employee,
    error,
    isPending,
  } = useFetch(`http://localhost:4000/api/v1/employees/${employeeNumber}`);

  const handleEditClick = () => {
    navigate(`/employees/${employeeNumber}/edit`);
  };
  const handleBackClick = () => {
    navigate(`/`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <h1>Employee Details</h1>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {employee && (
        <div className="row justify-content-center align-items-center">
          <div className="col-6 card" key={employee.employeeNumber}>
            <img
              src={employee.profilePic}
              className="card-img-top img-fluid rounded"
              style={{ marginTop: "2rem", maxHeight: "300px", width: "auto" }}
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
            <div className="card-footer">
              <button className="btn btn-warning" onClick={handleEditClick}>
                Edit Employee
              </button>
              <button
                className="btn btn-primary float-end"
                onClick={handleBackClick}
              >
                Back to Employees List
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
