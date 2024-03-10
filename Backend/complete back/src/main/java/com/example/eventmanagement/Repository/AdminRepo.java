package com.example.eventmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eventmanagement.Entity.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
    
}
