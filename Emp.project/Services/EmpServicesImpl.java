package com.employee_managment_system.emp.project.Services;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.employee_managment_system.emp.project.Controller.Employee;
import com.employee_managment_system.emp.project.Entity.EmpEntity;
import com.employee_managment_system.emp.project.Repository.EmplRepo;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmpServicesImpl implements EmpServices
 { 
     private final EmplRepo empRepo;
     @Autowired public 
     EmpServicesImpl(EmplRepo employeeRepository) 
     { this.empRepo = employeeRepository;}
     

    @Override 
    public String createEmployee(EmpEntity EmpEntity) 
    { 

        empRepo.save(EmpEntity); 
        return "Successfully created";
     } 

     @Override 
     public List<EmpEntity> readEmployees() 
     { List<EmpEntity> employeeList = empRepo.findAll(); 
        List<EmpEntity> entities = employeeList.stream().map(empEntity -> 
            { EmpEntity emp = new EmpEntity();
              emp.setId(empEntity.getId()); 
              emp.setName(empEntity.getName()); 
              emp.setEmail(empEntity.getEmail()); 
              emp.setPassword(empEntity.getPassword()); 
              emp.setPhone(empEntity.getPhone()); 
              return emp; }).collect(Collectors.toList());
              return entities;
            }           


    @Override public boolean deleteEmployee(Long id) {
          EmpEntity empEntity = empRepo.findById(id).get();
          empRepo.delete(empEntity);
          return true; 
    }

    @Override
    public String updateEmployee(Long id, EmpEntity empEntity) {
      EmpEntity empEntity1 = empRepo.findById(id).get();
      empEntity1.setName(empEntity.getName());
      empEntity1.setEmail(empEntity.getEmail());
      empEntity1.setPassword(empEntity.getPassword());
      empEntity1.setPhone(empEntity.getPhone());
      empRepo.save(empEntity1);
      return "update successfully";
    }

    @Override
    public Employee readEmployee(Long id) {
      EmpEntity empEntity = empRepo.findById(id).get();
          Employee employee = new Employee(); 
        BeanUtils.copyProperties(empEntity, employee); 

        return employee;
    }
   
}