package com.poc.storyed.users;

import org.springframework.stereotype.Service;

@Service
public interface UserDetailsService {
    void updateUserDetails(UserEntity user);
    void saveUser(UserEntity newUser) throws UserAlreadyFoundException;
    void deleteUser(long id);
    UserEntity getUserById(long id) throws UserNotFoundException;
    UserEntity getUserByEmail(String email) throws UserNotFoundException;
    boolean isUserExists(String email) throws UserNotFoundException;
    String hashPassword(String plainTextPassword);
}
