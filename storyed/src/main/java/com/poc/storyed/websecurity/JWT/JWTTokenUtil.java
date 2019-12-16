package com.poc.storyed.websecurity.JWT;

import com.poc.storyed.users.UserEntity;
import com.poc.storyed.websecurity.LoginRequest;
import org.springframework.stereotype.Component;


@Component
public class JWTTokenUtil {
    public String generateToken(LoginRequest user){
        return "Success";
    }
}
