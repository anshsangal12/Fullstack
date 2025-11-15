package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @PostMapping("/formabc")
    public String handleForm(
    ) {
        System.out.println("Submitted successfully");
        return "Form submitted successfully!";
    }
}
