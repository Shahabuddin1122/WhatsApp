package com.dsi.demo.config;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "twilio")
@Configuration
public class TwilioConfig {
    private String accountSid;
    private String authToken;
    private String phoneNumber;
}
