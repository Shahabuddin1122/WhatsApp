package com.dsi.demo.repository.impl;

import com.dsi.demo.model.Conversation;
import com.dsi.demo.model.Person;
import com.dsi.demo.repository.customRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class customRepoImpl implements customRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Conversation> findConversation(List<Person> receiverNumber) {
        return entityManager.createQuery(
                        "SELECT c FROM Conversation c WHERE :personParam MEMBER OF c.receiverNumber", Conversation.class)
                .setParameter("personParam", receiverNumber)
                .getResultList();
    }
}
