package com.example.api_springboot;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Clean and simple - no more exclude or security imports needed here!
@SpringBootApplication
public class ApiSpringbootApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.configure().directory("./").ignoreIfMalformed().ignoreIfMissing().load();

        if(dotenv.get("DB_URL") != null ) {
            System.setProperty("DB_URL", dotenv.get("DB_URL"));
        }
        if(dotenv.get("DB_USER") != null ) {
            System.setProperty("DB_USER", dotenv.get("DB_USER"));
        }
        if(dotenv.get("DB_PASS") != null ) {
            System.setProperty("DB_PASS", dotenv.get("DB_PASS"));
        }

        SpringApplication.run(ApiSpringbootApplication.class, args);
    }

}