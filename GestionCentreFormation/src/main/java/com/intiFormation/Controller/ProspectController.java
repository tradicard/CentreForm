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
import com.intiFormation.Service.IPaiementService;
import com.intiFormation.Service.IParticipantService;
import com.intiFormation.Service.IProspectService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class ProspectController {
	
	
	@Autowired
	IProspectService pros;
	
	@GetMapping("/propects")
	public List<Prospect> GestionProspect() {
		List<Prospect> listec=pros.getAllService();
		return listec;
	}
	
	@GetMapping("/propects/{id}")
	public Prospect GestionProspect(@PathVariable("id") int id) {
		Optional<Prospect> op=pros.selectByIdService(id);
		Prospect c=new Prospect();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/propects")
	public void SaveProspect(@RequestBody Prospect c) {
		pros.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/propects/{id}")
	public void SupprimerProspect(@PathVariable("id") int id) {
		pros.supprimerService(id);
	}
	
	
	
	@PutMapping("/propects")
	public void EditProspect(@RequestBody Prospect c) {
		pros.modifierService(c);
	}

}
