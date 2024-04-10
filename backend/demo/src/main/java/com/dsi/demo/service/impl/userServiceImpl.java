package com.dsi.demo.service.impl;

import com.dsi.demo.model.Person;
import com.dsi.demo.repository.UserRepository;
import com.dsi.demo.service.TwiloService;
import com.dsi.demo.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userServiceImpl implements userService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TwiloService twiloService;

    @Override
    public List<Person> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public ResponseEntity<?> addAUser(Person person) {
        Person person1 = userRepository.findByNumber(person.getNumber());
        if(person1 != null){
            return new ResponseEntity<>(person1,HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.save(person), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> sendSms(Person person) {
        return twiloService.sendSMS(person.getNumber());
    }

}
