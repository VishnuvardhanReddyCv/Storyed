package com.poc.storyed.users;


public class UserAlreadyFoundException extends Exception {
    public UserAlreadyFoundException(){
        super("User Already Exists.");
    }
}
