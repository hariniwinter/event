package com.example.eventmanagement.Service.ServiceImplementation;

import org.springframework.stereotype.Service;

import com.example.eventmanagement.DTO.EventDTO;
import com.example.eventmanagement.Entity.Event;
import com.example.eventmanagement.Repository.EventRepo;
import com.example.eventmanagement.Service.EventService;

import lombok.AllArgsConstructor; 


@Service
@AllArgsConstructor
public class EventServiceImplementation implements EventService {
    
    private EventRepo eventRepo;

    @Override
    public void createEvent(EventDTO eventdto)
    {
        Event event = new Event();
        event.setEName(eventdto.getEName());
        event.setEVenue(eventdto.getEVenue());
        event.setEdate(eventdto.getEdate());
        event.setECost(eventdto.getECost());
        eventRepo.save(event);


    }
    

    

    
}
