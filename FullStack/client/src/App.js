
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import EmployeeDetails from "./components/EmployeeDetails";
import UpdateEmployeeDetails from "./components/UpdateEmployeeDetails";

//const routes = ['/', '/profile', '/profile/:id', '/edit-profile']

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Employees />}></Route>
        <Route path="/employees/:employeeNumber" element={<EmployeeDetails />} ></Route>
        <Route path="/employees/:employeeNumber/edit" element={<UpdateEmployeeDetails />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
