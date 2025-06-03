    package com.employee_managment_system.emp.project.Repository;

    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;
    import com.employee_managment_system.emp.project.Entity.EmpEntity;


    @Repository
    public interface EmplRepo extends JpaRepository<EmpEntity, Long> {        
    }  

