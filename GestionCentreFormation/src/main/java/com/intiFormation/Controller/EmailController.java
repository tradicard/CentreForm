package com.intiFormation.Controller;

import java.io.File;
import java.util.List;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.quartz.Scheduler;
import org.quartz.SchedulerFactory;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Utilisateur;




@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EmailController{
	 
	@Autowired
	   public JavaMailSender emailSender;
	 //@Autowired
	 //private ICommandeService cos;

	   // @ResponseBody
	    @PostMapping("/sendSimpleEmail")
	    public void sendSimpleEmail(@RequestBody Contact c ) {
	    	//recup utilisateur et commande
	    	


	    	
	    	//Recuperation des lignes de la commande avec les lignes de commandes
	
	    	
	        // Create a Simple MailMessage.
	        SimpleMailMessage message = new SimpleMailMessage();
	        //receveur
	        message.setTo(c.getProspect().getMail());
	        //sujet
	        message.setSubject("Contact");
	        //message.setText(cos.findByUtilisateur(u).toString());
	        //contenu
	        message.setText(c.toString());

	        // Send Message!
	        this.emailSender.send(message);

	    }
	    
	    //Envoi Mail relance paiement à un participant
	    @PostMapping("/sendSimpleEmailRelancePaiement")
	    public void sendSimpleEmail(@RequestBody Relance r ) {
	    	System.out.println(r);
	        // Create a Simple MailMessage.
	    	SimpleMailMessage message = new SimpleMailMessage();
	        //receveur
	        message.setTo(r.getParticipant().getMail());
	        //sujet
	        message.setSubject("Participant");
	       
	        //contenu
	        message.setText(r.toString());

	        // Send Message!
	        this.emailSender.send(message);

	    }
	    
	    @PostMapping("/sendSimpleEmail2")
	    public void execute(JobExecutionContext arg0) throws JobExecutionException {
	    	
	   // 	sendSimpleEmail(null);
	    }
	    
	    
	    
	    //@ResponseBody
	    @RequestMapping("/sendAttachmentEmail")
	    public String sendAttachmentEmail(HttpSession s) throws MessagingException {

	        MimeMessage message = emailSender.createMimeMessage();
	        Utilisateur u=(Utilisateur)s.getAttribute("u");
	        boolean multipart = true;

	        MimeMessageHelper helper = new MimeMessageHelper(message, multipart);

	        helper.setTo(u.getMail());
	        helper.setSubject("Test email with attachments");
	        
	        helper.setText("Hello, Im testing email with attachments!");
	        
	        String path1 = "/home/tran/Downloads/test.txt";
	        String path2 = "/home/tran/Downloads/readme.zip";

	        // Attachment 1
	        FileSystemResource file1 = new FileSystemResource(new File("/scr/main/webapp/imageproduit/Pantalon.jp"));
	        helper.addAttachment("Txt file", file1);

	        // Attachment 2
	        //FileSystemResource file2 = new FileSystemResource(new File(path2));
	        //helper.addAttachment("Readme", file2);

	        emailSender.send(message);

	        return "Email Sent!";
	    }
	    
	    //@ResponseBody
	    @RequestMapping("/sendHtmlEmail")
	    public String sendHtmlEmail(HttpSession s) throws MessagingException {
	    	Utilisateur u=(Utilisateur)s.getAttribute("u");
	        MimeMessage message = emailSender.createMimeMessage();

	        boolean multipart = true;
	        
	        MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "utf-8");
	        
	        String htmlMsg = "<h3>Im testing send a HTML email</h3>"
	                +"<img src='http://www.apache.org/images/asf_logo_wide.gif'>";
	        
	        message.setContent(htmlMsg, "text/html");
	        
	        helper.setTo(u.getMail());
	        
	        helper.setSubject("Test send HTML email");
	        
	    
	        this.emailSender.send(message);

	        return "Email Sent!";
	    }
}
