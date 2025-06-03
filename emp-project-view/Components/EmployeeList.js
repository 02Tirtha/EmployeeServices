import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
import './EmployeeList.css';   // ← Import the new CSS

const EmployeeList = () => {
  const [loading, setLoading]     = useState(true);
  const [employees, setEmployees] = useState([]);
  const navigate                  = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await EmployeeService.getEmployees();
        setEmployees(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setEmployees([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    });
  };

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div className="container mx-auto my-8 employee-list-container">
      <div>
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-600 hover:bg-blue-700 my-12 font-semibold px-20 py-2 rounded"
        >
          Add Employee 👨🏼‍💻
        </button>
      </div>

      <div>
        <table className="shadow">
          <thead className="bg-slate-600">
            <tr>
              <th className="px-6 py-3 uppercase tracking-wide">Name</th>
              <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
              <th className="px-6 py-3 uppercase tracking-wide">Email</th>
              <th className="px-6 py-3 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id} className="hover:bg-white hover:text-black">
                  <td className="text-left px-6 py-4 whitespace-nowrap">{employee.name}</td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">{employee.phone}</td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">{employee.email}</td>
                  <td className="text-left px-6 py-4 whitespace-nowrap">
                    <a
                      onClick={e => editEmployee(e, employee.id)}
                      className="hover:text-green-500 hover:cursor-pointer mr-4"
                    >
                      Edit 📝
                    </a>
                    <a
                      onClick={e => deleteEmployee(e, employee.id)}
                      className="hover:text-red-500 hover:cursor-pointer"
                    >
                      Delete 🗑️
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
