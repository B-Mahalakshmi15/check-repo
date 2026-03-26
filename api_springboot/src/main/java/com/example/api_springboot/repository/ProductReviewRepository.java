package com.example.api_springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.api_springboot.entity.Product;
import com.example.api_springboot.entity.ProductReview;

public interface ProductReviewRepository  extends JpaRepository<ProductReview, Long>{

}
