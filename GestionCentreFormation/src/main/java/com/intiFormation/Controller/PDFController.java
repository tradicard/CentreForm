package com.intiFormation.Controller;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.intiFormation.Config.GeneratePdfReport;
import com.intiFormation.Service.IParticipantService;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Participant;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PDFController {
	@Autowired
	IParticipantService ps;

	  
	  @GetMapping(value = "/pdfreport/{id}", produces =
	  MediaType.APPLICATION_PDF_VALUE)
	  public ResponseEntity<InputStreamResource> commandesReport(@RequestBody Formation f,@PathVariable ("id") int id) {
	  
		  
	  Participant p=ps.selectByIdService(id).get();
	  
	  //appel de la methode
	  ByteArrayInputStream bis = GeneratePdfReport.commandesReport(f,p);
	  
	  //En mettant Content-Disposition à inline, le PDF file s'affiche directement sur le navigateur.
	  HttpHeaders headers = new HttpHeaders(); headers.add("Content-Disposition",
	  "attachment; filename=ListCommandes.pdf");
	  
	  //On crée une réponse avec ResponseEntity. Specification du headers, content type, et body.
	  return ResponseEntity .ok() .headers(headers)
	  .contentType(MediaType.APPLICATION_PDF) .body(new InputStreamResource(bis));
	  }
	 
}
