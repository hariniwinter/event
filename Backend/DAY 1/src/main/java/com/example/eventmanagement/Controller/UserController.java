package com.example.eventmanagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.eventmanagement.DTO.UserDTO;
import com.example.eventmanagement.Service.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/api/user")

public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/post")
    public void createUser(@RequestBody UserDTO userDto){
        userService.createUser(userDto);
    }
    
    
}
