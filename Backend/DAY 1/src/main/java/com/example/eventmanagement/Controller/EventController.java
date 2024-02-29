package com.example.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.eventmanagement.DTO.EventDTO;
import com.example.eventmanagement.Service.EventService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/api/user")
public class EventController {
 
    @Autowired
    EventService eventService;

    @PostMapping("/post")
    public void createEvent(@RequestBody EventDTO eventDto) {
        eventService.createEvent(eventDto);
    }
    
}
