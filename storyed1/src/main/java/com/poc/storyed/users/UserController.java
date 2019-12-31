package com.poc.storyed.users;


import com.poc.storyed.websecurity.JWT.JWTTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("getCurrentUser")
    public ResponseEntity<UserDTO> getCurrentUser() throws UserNotFoundException {
        String currenUserEmail = JWTTokenUtil.currenUserUsername;
        return ResponseEntity.ok(userService.getUserByEmail(currenUserEmail));
    }

}
