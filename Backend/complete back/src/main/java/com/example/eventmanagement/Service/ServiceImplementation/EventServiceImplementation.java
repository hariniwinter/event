package com.example.eventmanagement.Service.ServiceImplementation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.eventmanagement.DTO.EventDTO;
import com.example.eventmanagement.Entity.Event;
import com.example.eventmanagement.Repository.EventRepo;
import com.example.eventmanagement.Service.EventService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class EventServiceImplementation implements EventService {
private final EventRepo eventRepo;
 @Autowired
    public EventServiceImplementation(EventRepo eventRepo) {
        this.eventRepo = eventRepo;  }
     @Override
    public void createEvent(EventDTO eventDto) {
        Event event = new Event();
        BeanUtils.copyProperties(eventDto, event);
        eventRepo.save(event);}
    @Override
    public EventDTO getEventById(int id) {
        Optional<Event> optionalEvent = eventRepo.findById(id);
        EventDTO eventDto = new EventDTO();
        optionalEvent.ifPresent(event -> BeanUtils.copyProperties(event, eventDto));
        return eventDto;
    }

    @Override
    public List<EventDTO> getAllEvents() {
        List<Event> events = eventRepo.findAll();
        return events.stream()
                     .map(event -> {
                         EventDTO eventDto = new EventDTO();
                         BeanUtils.copyProperties(event, eventDto);
                         return eventDto;
                     })
                     .collect(Collectors.toList());
    }

    @Override
    public void deleteEvent(int id) {
        eventRepo.deleteById(id);
    }

    @Override
    public void updateEvent(int id, EventDTO eventDto) {
        Optional<Event> optionalEvent = eventRepo.findById(id);
        optionalEvent.ifPresent(event -> {
            BeanUtils.copyProperties(eventDto, event);
            eventRepo.save(event);
        });
    }
}                        
