package com.nitc.BSS.config;


import jakarta.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .cors() // enable CORS from your CorsFilter
        .and()
        .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // stateless API
        .and()
        .authorizeHttpRequests(auth -> auth
        .requestMatchers("/api/auth/**").permitAll()
        .requestMatchers("/api/driver-schedule").permitAll()
        .requestMatchers("/api/student-dashboard", "/api/bus-schedule").permitAll()
        .requestMatchers("/api/bus-schedule/**").permitAll() // 🔥 FIXED LINE
        .requestMatchers("/api/buses/**").authenticated()
        
        .anyRequest().authenticated()
    )
    
        .httpBasic().disable() // disable basic auth
        .formLogin().disable(); // disable default login page

    return http.build();
}

    @Bean
public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
}
    
}

