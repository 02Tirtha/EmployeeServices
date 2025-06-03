package com.employee_managment_system.emp.project.Services;

import java.util.List;

import com.employee_managment_system.emp.project.Controller.Employee;
import com.employee_managment_system.emp.project.Entity.EmpEntity;


public interface EmpServices {
   String createEmployee(EmpEntity employee);
   List<EmpEntity> readEmployees();
   String updateEmployee(Long id,EmpEntity empEntity);
   boolean deleteEmployee(Long id);
   Employee readEmployee(Long id);
   
}
