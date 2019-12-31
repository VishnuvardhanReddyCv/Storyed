package com.poc.storyed.websecurity;

import com.poc.storyed.users.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface LoginService extends UserDetailsService {
}
