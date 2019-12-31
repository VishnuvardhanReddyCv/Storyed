package com.poc.storyed.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserDAOImpl implements UserDAO {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void updateUserDetails(UserEntity user) {
        userRepository.save(user);
    }

    @Override
    public void saveUser(UserEntity newUser) {
        try{
            userRepository.save(newUser);
        }
        catch (Exception ex){

        }
    }

    @Override
    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserEntity getUserById(long id) throws UserNotFoundException {
        Optional<UserEntity> user = userRepository.findById(id);
        if(!user.isPresent())
            throw new UserNotFoundException();
        return user.get();
    }

    @Override
    public UserEntity getUserByEmail(String email) throws UserNotFoundException {
        UserEntity user =  userRepository.getUserByEmail(email);
        System.out.println(user);
        if(user == null)
            throw new UserNotFoundException();
        return user;
    }
}
