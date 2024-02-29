package com.example.eventmanagement.Entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Event {
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String EName;
    private String EVenue;
    private Date Edate;
    private int ECost;   
    
}

