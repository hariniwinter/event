package com.example.eventmanagement.Service;
import java.util.List;
import com.example.eventmanagement.DTO.EventDTO;

public interface EventService {
    void createEvent(EventDTO eventdto);
    EventDTO getEventById(int id);
    List<EventDTO> getAllEvents();
    void deleteEvent(int id);
    void updateEvent(int id, EventDTO eventDto);

}
