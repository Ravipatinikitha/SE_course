package com.nitc.BSS.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nitc.BSS.model.User;



public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
