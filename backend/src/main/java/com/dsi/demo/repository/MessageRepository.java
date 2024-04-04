package com.dsi.demo.repository;

import com.dsi.demo.model.Message;
import com.dsi.demo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {

    List<Message> findByConversationId(Long conversationId);
}