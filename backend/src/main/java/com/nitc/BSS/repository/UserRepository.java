package com.nitc.BSS.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nitc.BSS.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByIdAndPassword(String id, String password);
    boolean existsByEmail(String email);
    @Override
    Optional<User> findById(String id);
}