package com.nitc.BSS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nitc.BSS.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User findByIdAndPassword(String id, String password);
}