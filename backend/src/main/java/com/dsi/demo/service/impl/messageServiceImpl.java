package com.dsi.demo.service.impl;

import com.dsi.demo.dto.ConversationDto;
import com.dsi.demo.dto.MessageDto;
import com.dsi.demo.model.Conversation;
import com.dsi.demo.model.Message;
import com.dsi.demo.model.Person;
import com.dsi.demo.repository.ConversationRepository;
import com.dsi.demo.repository.MessageRepository;
import com.dsi.demo.repository.UserRepository;
import com.dsi.demo.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class messageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConversationRepository conversationRepository;

    @Override
    public ResponseEntity<?> saveMessage(MessageDto messageDto) {

        Person user1 = userRepository.findById(messageDto.getSenderId()).orElseThrow(()-> new RuntimeException("sender not found"));
        Person user2 = userRepository.findById(messageDto.getReceiverId()).orElseThrow(()-> new RuntimeException("receiver not found"));

        Conversation conversation = getOrCreateConversation(user1, user2);

        // Create a new message
        Message message = new Message();
        message.setMessage(messageDto.getMessage());
        message.setSenderNumber(user1);
        message.setConversation(conversation);

        // Save the message
        messageRepository.save(message);

        return new ResponseEntity<>(message, HttpStatus.OK);
    }




    @Override
    public ResponseEntity<?> getAllUser(Long id) {
        List<Conversation> conversationList = conversationRepository.findByReceiverNumberContainsUser(id);
        return new ResponseEntity<>(conversationList,HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> createNewConversation(ConversationDto conversationDto) {
        Person user1 = userRepository.findById(conversationDto.getUser1()).orElseThrow(()-> new RuntimeException("sender not found"));
        Person user2 = userRepository.findById(conversationDto.getUser2()).orElseThrow(()-> new RuntimeException("receiver not found"));

        Conversation conversation = getOrCreateConversation(user1, user2);

        return new ResponseEntity<>(conversation,HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> getAllMessage(Long id) {
        return new ResponseEntity<>(messageRepository.findByConversationId(id),HttpStatus.OK);
    }


    private Conversation getOrCreateConversation(Person user1, Person user2) {
        List<Conversation> c = conversationRepository.findByReceiverNumberContainsUsers(Arrays.asList(user1.getId(),user2.getId()),2);

        if (!c.isEmpty()) {
            return c.get(0);
        }

        //If not exist

        Conversation conversation = new Conversation();

        conversation.setReceiverNumber(Arrays.asList(user1,user2));
        return conversationRepository.save(conversation);
    }


}
