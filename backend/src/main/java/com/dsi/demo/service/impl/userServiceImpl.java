package com.dsi.demo.service.impl;

import com.dsi.demo.model.Person;
import com.dsi.demo.repository.UserRepository;
import com.dsi.demo.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServiceImpl implements userService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public List<Person> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public Person addAUser(Person person) {
        return userRepository.save(person);
    }
}
