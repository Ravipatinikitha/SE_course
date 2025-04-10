package com.nitc.BSS.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nitc.BSS.model.User;
import com.nitc.BSS.repository.UserRepository;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> authenticate(String id, String password) {
        return Optional.ofNullable(userRepository.findByIdAndPassword(id, password));
    }
    public Optional<User> getUserById(String userId) {
        return userRepository.findById(userId);
    }
    
}