package com.example.eventmanagement.Service.ServiceImplementation;



import org.springframework.stereotype.Service;

import com.example.eventmanagement.DTO.AdminDTO;
import com.example.eventmanagement.Entity.Admin;
import com.example.eventmanagement.Repository.AdminRepo;

import com.example.eventmanagement.Service.AdminService;

import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor

public class AdminServiceImplementation implements AdminService {
     private AdminRepo adminRepo;

    @Override
    public void createAdmin(AdminDTO admindto)
    {
        Admin admin = new Admin();
        admin.setUserName(admindto.getUserName());
        admin.setPassword(admindto.getPassword());
       
        adminRepo.save(admin);


    }
    
}
