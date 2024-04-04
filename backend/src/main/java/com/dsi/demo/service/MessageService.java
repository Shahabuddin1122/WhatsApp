package com.dsi.demo.service;

import com.dsi.demo.dto.ConversationDto;
import com.dsi.demo.dto.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface MessageService {
    public ResponseEntity<?> saveMessage(MessageDto messageDto);

    public ResponseEntity<?> getAllUser(Long id);

    public ResponseEntity<?> createNewConversation(ConversationDto conversationDto);

    public ResponseEntity<?> getAllMessage(Long id);
}
