package com.intiFormation.Controller;

import org.quartz.JobDataMap;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.quartz.QuartzJobBean;
import org.springframework.stereotype.Component;




@Component
public class EmailJob extends QuartzJobBean {
    private static final Logger logger = LoggerFactory.getLogger(EmailJob.class);

    @Autowired
    private JavaMailSender mailSender;
    
    //@Autowired
    //private MailProperties mailProperties;
    
    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        logger.info("Executing Job with key {}", jobExecutionContext.getJobDetail().getKey());

        JobDataMap jobDataMap = jobExecutionContext.getMergedJobDataMap();
        String subject = jobDataMap.getString("subject");
        String body = jobDataMap.getString("body");
        String recipientEmail = jobDataMap.getString("email");

        sendMail("3bbbate@gmail.com", recipientEmail, subject, body);
    }

    private void sendMail(String fromEmail, String toEmail, String subject, String body) {
        try {
            logger.info("Sending Email to {}", toEmail);
            
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
	        //receveur
	        message.setTo(toEmail);
	        //sujet
	        message.setSubject(subject);
	        //message.setText(cos.findByUtilisateur(u).toString());
	        //contenu
	        message.setText(body);

	        // Send Message!
	        this.mailSender.send(message);
            
            
        } catch (Exception ex) {
            logger.error("Failed to send email to {}", toEmail);
        }
    }
    
    

}
