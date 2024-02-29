package com.example.eventmanagement.Service.ServiceImplementation;


import org.springframework.stereotype.Service;


import com.example.eventmanagement.DTO.UserDTO;
import com.example.eventmanagement.Entity.EUser;
import com.example.eventmanagement.Repository.UserRepo;
import com.example.eventmanagement.Service.UserService;

import lombok.AllArgsConstructor;
@Service 
@AllArgsConstructor

public class UserServiceImplementation implements UserService{
    private  UserRepo userRepo;
      @Override
    public void createUser(UserDTO userdto)
    {
        EUser user = new EUser();
        user.setUserName(userdto.getUserName());
        user.setPassword(userdto.getPassword());
       
        userRepo.save(user);


    }
    
}
