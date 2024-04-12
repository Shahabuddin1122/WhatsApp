package com.dsi.demo.service.impl;

import com.dsi.demo.config.TwilioConfig;
import com.dsi.demo.service.TwiloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.text.DecimalFormat;
import java.util.Random;

@Service
public class twilioServiceImpl implements TwiloService {

    @Autowired
    private TwilioConfig twilioConfig;

    @Override
    public ResponseEntity<?> sendSMS(String number) {

        try {

            String ReceiverNumber;
            if (!number.startsWith("+88")) {
                ReceiverNumber = "+88"+number;
            } else {
                ReceiverNumber = number;
            }

            PhoneNumber to = new PhoneNumber(ReceiverNumber);
            PhoneNumber from = new PhoneNumber(twilioConfig.getPhoneNumber());
            String otp = generateOtp();

            String otpMessage = "Dear Customer , Your WhatsApp Verification code is - "+otp;

            Message message = Message
                    .creator(to,from,otpMessage)
                    .create();
            return new ResponseEntity<>(message.getBody().split("-")[2], HttpStatus.OK);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>("Error to send", HttpStatus.BAD_REQUEST);
        }
    }

    private String generateOtp(){
        return new DecimalFormat("000000")
                .format(new Random().nextInt(999999));
    }
}
