package com.example.api_springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.api_springboot.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findByReferenceId(String referenceId);
}
