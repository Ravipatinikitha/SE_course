package com.nitc.BSS.controller;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.dto.LoginRequest;
import com.nitc.BSS.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    boolean isValid = userService.validateUser(request.getUsername(), request.getPassword());
    if (isValid) {
        return ResponseEntity.ok().body(Map.of("message", "Login successful"));
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials"));
    }
}}
 
// DTO for login request
