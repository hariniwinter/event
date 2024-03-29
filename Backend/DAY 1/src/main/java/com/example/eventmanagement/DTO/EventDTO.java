package com.example.eventmanagement.DTO;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class EventDTO {
 
    private int id;
    private String EName;
    private String EVenue;
    private Date Edate;
    private int ECost;  
}
