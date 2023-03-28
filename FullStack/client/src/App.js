
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/Employees";
import EmployeeDetails from "./components/EmployeeDetails";

//const routes = ['/', '/profile', '/profile/:id', '/edit-profile']

function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Employees />}></Route>
        <Route path="/employees/:id" element={<EmployeeDetails />} />
      </Routes>

    </div>
  );
}

export default App;
