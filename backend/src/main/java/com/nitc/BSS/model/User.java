package com.nitc.BSS.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
// import jakarta.validation.constraints.Email;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "id", length = 15, nullable = false)
    private String id;

    // @NotBlank
    // @Email
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    // @NotBlank
    // @Size(min = 6)
    @Column(name = "password", nullable = false)
    private String password;

    // @NotBlank
    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "name")
    private String name;


    public User() {
    }

    public User(String id, String email, String password, String role, String name) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
        this.name = name;
      
    }
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    // Getters and Setters (add for new fields)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                ", name='" + name + '\'' +
               
                '}';
    }
}



