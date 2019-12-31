package com.poc.storyed.websecurity;

import com.poc.storyed.users.UserAlreadyFoundException;
import com.poc.storyed.users.UserDetailsService;
import com.poc.storyed.users.UserEntity;
import com.poc.storyed.users.UserNotFoundException;
import com.poc.storyed.websecurity.JWT.JWTTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> logIn(@RequestBody LoginRequest user) {
        if (user.getEmail() == null || user.getPassword() == null)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username and password must be provided.");
        final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getEmail(),
                            user.getPassword()
                    ));
        return ResponseEntity.ok(new LoginResponse(new JWTTokenUtil().generateToken(authentication)));
    }

    @RequestMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserEntity newUser) throws UserAlreadyFoundException {
        userDetailsService.saveUser(newUser);
        return ResponseEntity.ok("Succes");
    }


    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<?> badCredentialsExceptionHandler(){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad Credentials");
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> userNotFoundExceptionHandler(){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Not Found");
    }



}
