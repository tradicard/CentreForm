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
import com.intiFormation.Service.IFormateurService;
import com.intiFormation.Service.IFormationService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class FormationController {
	
	
	@Autowired
	IFormationService fns;
	
	@GetMapping("/formations")
	public List<Formation> GestionFormation() {
		List<Formation> listec=fns.getAllService();
		return listec;
	}
	
	@GetMapping("/formations/{id}")
	public Formation GestionFormation(@PathVariable("id") int id) {
		Optional<Formation> op=fns.selectByIdService(id);
		Formation c=new Formation();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/formations")
	public void SaveFormation(@RequestBody Formation c) {
		fns.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/formations/{id}")
	public void SupprimerFormation(@PathVariable("id") int id) {
		fns.supprimerService(id);
	}
	
	
	
	@PutMapping("/formations")
	public void EditFormation(@RequestBody Formation c) {
		fns.modifierService(c);
	}

}
