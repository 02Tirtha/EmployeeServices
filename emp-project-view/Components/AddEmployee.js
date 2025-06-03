import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddEmployee.css';  // Import the CSS file here

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    if (loggedInEmail) {
      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        email: loggedInEmail,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });

    if (name === 'phone') {
      if (value.length !== 10) {
        setPhoneError('Phone number must be exactly 10 digits.');
      } else {
        setPhoneError('');
      }
    }
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/employees', employee)
      .then((response) => {
        console.log("saved ", response.data);
        navigate("/employeeList");  // Go to Employee List after saving
      })
      .catch((error) => {
        console.error("Error saving employee:", error.response ? error.response.data : error.message);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: localStorage.getItem('loggedInEmail') || "",
      password: "",
    });
    setPhoneError('');
  };

  return (
    <div className="add-employee-container max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className='text-4xl tracking-wider font-bold text-center py-4 px-8'>
        <p>Add 🧑🏼‍💻 New Employee</p>
      </div>

      <div className='mx-10 my-2'>
        <input
          type='text'
          name="name"
          value={employee.name}
          onChange={handleChange}
          className="w-full py-2 my-4 text-slate-800" placeholder='Name'
        />

        <input
          type='number'
          name='phone'
          value={employee.phone}
          onChange={handleChange}
          className="w-full py-2 my-4 text-slate-800" placeholder='Phone'
        />
        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}

        <input
          type='email'
          name='email'
          value={employee.email}
          onChange={handleChange}
          className="w-full py-2 my-4 text-slate-800" placeholder='Email'
          readOnly
        />

        <input
          type='password'
          name='password'
          value={employee.password}
          onChange={handleChange}
          className="w-full py-2 my-4 text-slate-800" placeholder='Password'
        />
      </div>

      <div className='flex my-4 space-x-4 px-20'>
        <button
          onClick={saveEmployee}
          className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'
        >
          Save
        </button>
        <button
          onClick={reset}
          className='bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded'
        >
          Clear
        </button>
        <button
          onClick={() => navigate("/employeeList")}
          className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
