package com.nitc.BSS.controller;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nitc.BSS.model.User;
import com.nitc.BSS.repository.UserRepository;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Map<String, String> request, HttpServletRequest httpRequest) {
    System.out.println("Received login request");
    try {
        String id = request.get("id");
        String password = request.get("password");

        User user = userRepository.findById(id).orElse(null);
        if (user == null || !user.getPassword().equals(password)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials"));
        }

        // Store user ID in session
        httpRequest.getSession().setAttribute("USER_ID", user.getId());

        return ResponseEntity.ok(Map.of(
            "id", user.getId(),
            "role", user.getRole(),
            "email", user.getEmail()
        ));
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Login failed: " + e.getMessage()));
    }
}

    

    @GetMapping("/user")
    public ResponseEntity<?> getUser(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        User user = userRepository.findById(principal.getName()).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        Map<String, String> userInfo = new HashMap<>();
        userInfo.put("username", user.getId());
        userInfo.put("role", user.getRole());

        return ResponseEntity.ok(userInfo);
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test API is working!");
    }
}
