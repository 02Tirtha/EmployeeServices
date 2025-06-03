package com.employee_managment_system.emp.project.Entity;

import jakarta.persistence.Column; 
import jakarta.persistence.Entity; 
import jakarta.persistence.GeneratedValue; 
import jakarta.persistence.GenerationType; 
import jakarta.persistence.Id; 
import jakarta.persistence.Table; 
import lombok.Data; 

@Data 
@Entity 
@Table(name = "employee_db") 
public class EmpEntity 
{ 
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id; 
    @Column(nullable = false, length = 10) 
    private String password; 
    @Column(name = "name", nullable = false) 
    private String name; 
    @Column(name = "Phonenum", nullable = false, length = 10) 
    private String phone; 
    @Column(name = "email", nullable = false, length = 50) 
    private String email;
    // private String role;

}


