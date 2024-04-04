package com.dsi.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "fk_conversation_id")
    private Conversation conversation;

    @ManyToOne
    @JoinColumn(name = "fk_person_id")
    private Person senderNumber;

    private String message;
    private String attachment;
    private Date date;

}
