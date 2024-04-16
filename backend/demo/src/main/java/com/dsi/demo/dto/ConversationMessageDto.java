package com.dsi.demo.dto;

import com.dsi.demo.model.Conversation;
import com.dsi.demo.model.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConversationMessageDto {
    private Conversation conversation;
    private Message message;
}
