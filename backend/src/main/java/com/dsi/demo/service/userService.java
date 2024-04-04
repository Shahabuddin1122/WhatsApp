package com.dsi.demo.service;

import com.dsi.demo.model.Person;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface userService {
    public List<Person> getAllUser();

    public Person addAUser(Person person);
}
