package com.example.eventmanagement.Service;


import com.example.eventmanagement.DTO.UserDTO;

public interface UserService {
    
     void createUser(UserDTO userdto);
    UserDTO getUserById(int id);
    void updateUser(int id, UserDTO userDto);
    void deleteUser(int id);
}
