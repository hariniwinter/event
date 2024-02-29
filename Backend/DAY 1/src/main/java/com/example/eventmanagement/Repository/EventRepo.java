package com.example.eventmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.eventmanagement.Entity.Event;

public interface EventRepo extends JpaRepository<Event,Integer>{
    
}
