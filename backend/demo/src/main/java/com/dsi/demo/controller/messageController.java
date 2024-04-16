package com.dsi.demo.controller;

import com.dsi.demo.dto.ConversationDto;
import com.dsi.demo.dto.MessageDto;
import com.dsi.demo.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/message")
public class messageController {

    @Autowired
    public MessageService messageService;

    @PostMapping
    public ResponseEntity<?> saveMessage(@RequestBody MessageDto messageDto){
        return messageService.saveMessage(messageDto);
    }

    @GetMapping("/conversation/{id}")  //id=user_id
    public ResponseEntity<?> getAllUser(@PathVariable long id){
        return messageService.getAllUser(id);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addNewConversation(@RequestBody ConversationDto conversationDto){
        return messageService.createNewConversation(conversationDto);
    }

    @PostMapping("/getAll/{id}") //id=conversation_id
    public ResponseEntity<?> getAllMessage(@PathVariable Long id){
        return messageService.getAllMessage(id);
    }
}
