package com.poc.storyed.users;

import org.springframework.stereotype.Component;

@Component
public interface UserService {
    void updateUserDetails(UserEntity user);
    void saveUser(UserEntity newUser);
    void deleteUser(long id);
    UserDTO getUserById(long id) throws UserNotFoundException;
    UserDTO getUserByEmail(String email) throws UserNotFoundException;
}
