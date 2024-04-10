package com.dsi.demo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface TwiloService {
    public ResponseEntity<?> sendSMS(String number);
}
