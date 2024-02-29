package com.example.eventmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eventmanagement.Entity.EUser;

public interface UserRepo extends JpaRepository<EUser,Integer>{
    
}
