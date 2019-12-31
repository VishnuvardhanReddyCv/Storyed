package com.poc.storyed.users;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public void updateUserDetails(UserEntity user) {
        userDAO.updateUserDetails(user);
    }

    @Override
    public void saveUser(UserEntity newUser) throws UserAlreadyFoundException {
        newUser.setDateCreated(new Timestamp(new Date().getTime()));
        newUser.setPassword(hashPassword(newUser.getPassword()));
        if(isUserExists(newUser.getEmail()))
            throw new UserAlreadyFoundException();
        userDAO.saveUser(newUser);
    }

    @Override
    public void deleteUser(long id) {
        userDAO.deleteUser(id);
    }

    @Override
    public UserEntity getUserById(long id) throws UserNotFoundException {
        return userDAO.getUserById(id);
    }

    @Override
    public UserEntity getUserByEmail(String email) throws UserNotFoundException {
       return userDAO.getUserByEmail(email);
    }

    @Override
    public boolean isUserExists(String email)  {
        try {
            UserEntity user =  userDAO.getUserByEmail(email) ;
        }catch (Exception ex){
            return false;
        }
        return true;
    }

    @Override
    public String hashPassword(String plainTextPassword) {
        return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
    }
}
