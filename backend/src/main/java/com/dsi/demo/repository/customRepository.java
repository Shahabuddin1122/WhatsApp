package com.dsi.demo.repository;

import com.dsi.demo.model.Conversation;
import com.dsi.demo.model.Person;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface customRepository {
    public List<Conversation> findConversation(List<Person> receiverNumber);
}
