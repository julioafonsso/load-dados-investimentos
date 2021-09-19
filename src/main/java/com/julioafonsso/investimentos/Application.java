package com.julioafonsso.investimentos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@EnableJpaRepositories(basePackages = "com.julioafonsso.investimentos.model")
//@EntityScan(basePackages = "com.julioafonsso.investimentos.model")
//@ComponentScan(basePackages ="com.julioafonsso.investimentos.loaddados" )
//@EnableAutoConfiguration
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
