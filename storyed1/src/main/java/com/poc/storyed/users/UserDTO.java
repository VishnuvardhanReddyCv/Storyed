package com.poc.storyed.users;

import javax.persistence.Column;
import java.sql.Timestamp;



public class UserDTO {

    public UserDTO(long id, String email, String firstName, String middleName, String lastName, Timestamp dateCreated, String city, long mobileNumber, String description) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dateCreated = dateCreated;
        this.city = city;
        this.mobileNumber = mobileNumber;
        this.description = description;
    }


    public UserDTO(UserEntity user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.middleName = user.getMiddleName();
        this.lastName = user.getLastName();
        this.dateCreated = user.getDateCreated();
        this.city = user.getCity();
        this.mobileNumber = user.getMobileNumber();
        this.description = user.getDescription();
    }

    public UserDTO() {
    }

    private long id;

    private String email;

    private String firstName;

    private String middleName;

    private String lastName;

    private Timestamp dateCreated;

    private String city;

    private long mobileNumber;

    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Timestamp getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Timestamp dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public long getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(long mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
