package com.intiFormation.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.intiFormation.Service.IAssistantService;

import com.intiFormation.entity.Assistant;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class AssistantController {
	
	
	@Autowired
	IAssistantService as;
	
	@GetMapping("/assistants")
	public List<Assistant> GestionAssistant() {
		List<Assistant> listec=as.getAllService();
		return listec;
	}
	
	@GetMapping("/assistants/{id}")
	public Assistant GestionAssistant(@PathVariable("id") int id) {
		Optional<Assistant> op=as.selectByIdService(id);
		Assistant c=new Assistant();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/assistants")
	public void SaveAssistant(@RequestBody Assistant c) {
		as.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/assistants/{id}")
	public void SupprimerAssistant(@PathVariable("id") int id) {
		as.supprimerService(id);
	}
	
	
	
	@PutMapping("/assistants")
	public void EditAssistant(@RequestBody Assistant c) {
		as.modifierService(c);
	}

}
