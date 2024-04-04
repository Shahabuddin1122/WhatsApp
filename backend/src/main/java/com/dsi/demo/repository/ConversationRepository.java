package com.dsi.demo.repository;

import com.dsi.demo.model.Conversation;
import com.dsi.demo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation,Long> {
    List<Conversation> findAllByReceiverNumber(List<Person> receiverNumber);

    @Query("SELECT c FROM Conversation c JOIN c.receiverNumber r WHERE r.id IN :userIds GROUP BY c.id HAVING COUNT(DISTINCT r) = :userCount")
    List<Conversation> findByReceiverNumberContainsUsers(List<Long> userIds,long userCount);

    @Query("SELECT c FROM Conversation c JOIN c.receiverNumber r WHERE r.id = :userId")
    List<Conversation> findByReceiverNumberContainsUser(Long userId);
}
