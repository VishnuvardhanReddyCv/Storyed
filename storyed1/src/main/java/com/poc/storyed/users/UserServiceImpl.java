package com.poc.storyed.users;

import com.poc.storyed.utils.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDAO userDAO;

    @Override
    public void updateUserDetails(UserEntity user) {
        userDAO.updateUserDetails(user);
    }

    @Override
    public void saveUser(UserEntity newUser) {
        userDAO.saveUser(newUser);
    }

    @Override
    public void deleteUser(long id) {
        userDAO.deleteUser(id);
    }

    @Override
    public UserDTO getUserById(long id) throws UserNotFoundException {
        return Mapper.transformUserEntityToUserDTO(userDAO.getUserById(id));
    }

    @Override
    public UserDTO getUserByEmail(String email) throws UserNotFoundException {
        return  Mapper.transformUserEntityToUserDTO(userDAO.getUserByEmail(email));
    }
}
