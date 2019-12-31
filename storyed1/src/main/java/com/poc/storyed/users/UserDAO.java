package com.poc.storyed.users;

import org.springframework.stereotype.Component;

@Component
public interface UserDAO {
    void updateUserDetails(UserEntity user);
    void saveUser(UserEntity newUser);
    void deleteUser(long id);
    UserEntity getUserById(long id) throws UserNotFoundException;
    UserEntity getUserByEmail(String email) throws UserNotFoundException;
}
