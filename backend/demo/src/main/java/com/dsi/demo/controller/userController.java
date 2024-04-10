package com.dsi.demo.controller;

import com.dsi.demo.model.Person;
import com.dsi.demo.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class userController {

    @Autowired
    private userService userService;
    @GetMapping
    public ResponseEntity<?> getUser(){
        return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<?> addAUser(@RequestBody Person person){
        return userService.addAUser(person);
    }

    @PostMapping("/send/sms")
    public ResponseEntity<?> sendSms(@RequestBody Person person){
        return userService.sendSms(person);
    }
}
