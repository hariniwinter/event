package com.example.eventmanagement.Service.ServiceImplementation;

import com.example.eventmanagement.Entity.UserInfo;
import com.example.eventmanagement.Repository.UserInfoRepository;
import com.example.eventmanagement.Service.UserInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImplementation implements UserInfoService {

    private final UserInfoRepository userInfoRepository;

    @Autowired
    public UserInfoServiceImplementation(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    @Override
    public List<UserInfo> getAllUsers() {
        return userInfoRepository.findAll();
    }
}
