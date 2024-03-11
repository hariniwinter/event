package com.example.eventmanagement.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eventmanagement.DTO.AdminDTO;
import com.example.eventmanagement.Service.AdminService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin")
@RestController
public class AdminController {

     @Autowired
    AdminService adminService;

    @PostMapping("/post")
    public void createAdmin(@RequestBody AdminDTO adminDto) {
    adminService.createAdmin(adminDto);
    }
    
}    




