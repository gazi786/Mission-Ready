import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const UpdateEmployeeDetails = () => {
  const { employeeNumber } = useParams();
  const {
    data: employee,
    error,
    isPending,
  } = useFetch(`http://localhost:4000/api/v1/employees/${employeeNumber}`);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [extension, setExtension] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (employee) {
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setJobTitle(employee.jobTitle);
      setEmail(employee.email);
      setExtension(employee.extension);
      setImageURL(employee.profilePic ? employee.profilePic : "");
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      firstName,
      lastName,
      jobTitle,
      email,
      extension,
      profilePic: imageURL,
    };
    fetch(`http://localhost:4000/api/v1/employees/${employeeNumber}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmployee),
    }).then(() => {
      navigate(`/employees/${employeeNumber}`);
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <h1>Update Employee Details</h1>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {employee && (
        <div className="row justify-content-center align-items-center">
          <div className="col-8 card">
            <img
              src={employee.profilePic}
              className="card-img-top img-fluid rounded"
              style={{ marginTop: "2rem", maxHeight: "200px", width: "auto"
              alt={employee.firstName + " " + employee.lastName}
            />
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="extension">Extension:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="extension"
                    value={extension}
                    onChange={(e) => setExtension(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imageURL">Image URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageURL"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateEmployeeDetails;
