package com.example.eventmanagement.Service.ServiceImplementation;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import com.example.eventmanagement.DTO.UserDTO;
import com.example.eventmanagement.Entity.EUser;
import com.example.eventmanagement.Repository.UserRepo;
import com.example.eventmanagement.Service.UserService;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    private UserRepo userRepo;

    
    public UserServiceImplementation(UserRepo userRepo)
    {
        this.userRepo = userRepo;
    }

    @Override
    public void createUser(UserDTO userDTO)
    {
        EUser user = new EUser();
        user.setUserName(userDTO.getUserName());
        user.setPassword(userDTO.getPassword());
        userRepo.save(user);
        
    }

    @Override
    public UserDTO getUserById(int id) {
        Optional<EUser> optionalUser = userRepo.findById(id);
        UserDTO userDto = new UserDTO();
        optionalUser.ifPresent(user -> BeanUtils.copyProperties(user, userDto));
        return userDto;
    }

    @Override
    public void updateUser(int id, UserDTO userDto) {
        Optional<EUser> optionalUser = userRepo.findById(id);
        optionalUser.ifPresent(user -> {
            BeanUtils.copyProperties(userDto, user);
            userRepo.save(user);
        });
    }

    @Override
    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }
    
}