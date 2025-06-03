package com.employee_managment_system.emp.project.Controller;

import org.springframework.web.bind.annotation.RestController;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@RestController
@Entity
public class Employee {

    
    private Long id ;
    private String name;
    private String phone;
    private String email;         
    private String password;  
    
    
}
