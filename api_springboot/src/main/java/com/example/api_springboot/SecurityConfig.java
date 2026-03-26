package com.example.api_springboot;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Crucial for testing POST/PUT requests
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // This turns off the 401 requirement
                );
        return http.build();
    }
}