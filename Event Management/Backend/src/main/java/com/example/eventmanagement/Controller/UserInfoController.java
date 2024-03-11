package com.example.eventmanagement.Controller;

import com.example.eventmanagement.Entity.UserInfo;
import com.example.eventmanagement.Repository.UserInfoRepository;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@CrossOrigin(origins = "*")
@RequestMapping("/api/user")
@RestController
public class UserInfoController {

    private final UserInfoRepository userInfoRepository;

    @Autowired
    public UserInfoController(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @GetMapping
    public List<UserInfo> getAllUsers() {
        return userInfoRepository.findAll();
    }
}
