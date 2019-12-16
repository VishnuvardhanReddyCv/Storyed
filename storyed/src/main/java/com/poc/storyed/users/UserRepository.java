package com.poc.storyed.users;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
    @Query(value = "SELECT * from users u where u.email = ?1",nativeQuery = true)
    UserEntity getUserByEmail(String email);
}
