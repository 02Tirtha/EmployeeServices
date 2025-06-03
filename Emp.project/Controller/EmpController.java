package com.employee_managment_system.emp.project.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.PathVariable; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.employee_managment_system.emp.project.Entity.EmpEntity;
import com.employee_managment_system.emp.project.Services.EmpServices; 
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/")
public class EmpController 
{ 
   
    @Autowired
    private EmpServices EmpServices;
    
    @GetMapping("/employees") //read
    public List<EmpEntity> getAllEmployees() {
        return EmpServices.readEmployees();
    }
    
    @GetMapping("/employees/{id}")
    public Employee getEmployeesById(@PathVariable Long id) {
        return EmpServices.readEmployee(id);
    }
    
    @PostMapping("/employees") // create
public String createEmployee(@RequestBody EmpEntity employee) {
    EmpServices.createEmployee(employee);
    return "Successfully created";
}    
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {
       if(EmpServices.deleteEmployee(id)){
           return "Deleted Successfully";
       }
       return "Not Found";
    }

    @PutMapping("employees/{id}") // update
    public String putMethodName(@PathVariable Long id, @RequestBody EmpEntity employee) {
       
        
        return EmpServices.updateEmployee(id, employee);
    }  
    
 }


 