
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import EmployeeList from './Components/EmployeeList.js';
import AddEmployee from './Components/AddEmployee.js';
import UpdateEmployee from './Components/UpdateEmployee.js';
import Home from './Components/Home.js';
import LoginForm from './Components/LoginForm.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
