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
import com.intiFormation.Service.ICommercialService;
import com.intiFormation.Service.IContactService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class ContactController {
	
	
	@Autowired
	IContactService cos;
	
	@GetMapping("/contacts")
	public List<Contact> GestionContact() {
		List<Contact> listec=cos.getAllService();
		return listec;
	}
	
	@GetMapping("/contacts/{id}")
	public Contact GestionContact(@PathVariable("id") int id) {
		Optional<Contact> op=cos.selectByIdService(id);
		Contact c=new Contact();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/contacts")
	public void SaveContact(@RequestBody Contact c) {
		cos.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/contacts/{id}")
	public void SupprimerContact(@PathVariable("id") int id) {
		cos.supprimerService(id);
	}
	
	
	
	@PutMapping("/contacts")
	public void EditCommercial(@RequestBody Contact c) {
		cos.modifierService(c);
	}

}
