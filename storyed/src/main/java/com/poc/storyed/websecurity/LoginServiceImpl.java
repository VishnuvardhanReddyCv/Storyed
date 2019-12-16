package com.poc.storyed.websecurity;

import com.poc.storyed.users.UserDAO;
import com.poc.storyed.users.UserDetailsService;
import com.poc.storyed.users.UserEntity;
import com.poc.storyed.users.UserNotFoundException;
import com.poc.storyed.utils.Mapper;
import com.poc.storyed.websecurity.JWT.JWTTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserDAO userDAO;


    @Autowired
    private JWTTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;
    @Override
    public UserDetails loadUserByUsername(String s)  {
        try {
            return Mapper.transformUserEntityStoryedUser(userDAO.getUserByEmail(s));
        } catch (UserNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

}

