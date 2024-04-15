package com.dsi.demo.service;

import com.dsi.demo.model.Person;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface userService {
    public List<Person> getAllUser();

    public ResponseEntity<?> addAUser(Person person);

    public ResponseEntity<?> sendSms(Person person);

    public ResponseEntity<?> getUserByNumber(String number);
}
