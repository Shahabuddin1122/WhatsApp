package com.dsi.demo.repository;

import com.dsi.demo.model.Message;
import com.dsi.demo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {

    @Query("SELECT m FROM Message m  WHERE m.conversation.id = :conversationId ORDER BY m.date desc")
    List<Message> findConversationWithMessage(Long conversationId);

    @Query("SELECT m FROM Message m  WHERE m.conversation.id = :conversationId ORDER BY m.date asc")
    List<Message> findConversationWithMessageDec(Long conversationId);
}
