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
import com.intiFormation.Service.IRelanceService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Relance;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class RelanceController {
	
	
	@Autowired
	IRelanceService res;
	
	@GetMapping("/relances")
	public List<Relance> GestionRelance() {
		List<Relance> listec=res.getAllService();
		return listec;
	}
	
	@GetMapping("/relances/{id}")
	public Relance GestionRelance(@PathVariable("id") int id) {
		Optional<Relance> op=res.selectByIdService(id);
		Relance c=new Relance();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/relances")
	public void SaveRelance(@RequestBody Relance c) {
		res.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/relances/{id}")
	public void SupprimerRelance(@PathVariable("id") int id) {
		res.supprimerService(id);
	}
	
	
	
	@PutMapping("/relances")
	public void EditRelance(@RequestBody Relance c) {
		res.modifierService(c);
	}

}
