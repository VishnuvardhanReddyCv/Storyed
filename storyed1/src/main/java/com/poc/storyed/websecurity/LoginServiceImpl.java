package com.poc.storyed.websecurity;

import com.poc.storyed.users.UserDAO;
import com.poc.storyed.users.UserDetailsService;
import com.poc.storyed.users.UserNotFoundException;
import com.poc.storyed.utils.Mapper;
import com.poc.storyed.websecurity.JWT.JWTTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


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
            return Mapper.transformUserEntityToStoryedUser(userDAO.getUserByEmail(s));
        } catch (UserNotFoundException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("*").allowedOrigins("http://localhost:3000");
            }
        };
    }
}

