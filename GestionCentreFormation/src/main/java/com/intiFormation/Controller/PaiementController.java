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
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class PaiementController {
	
	
	@Autowired
	IPaiementService pts;
	
	@GetMapping("/paiements")
	public List<Paiement> GestionPaiement() {
		List<Paiement> listec=pts.getAllService();
		return listec;
	}
	
	@GetMapping("/paiements/{id}")
	public Paiement GestionPaiement(@PathVariable("id") int id) {
		Optional<Paiement> op=pts.selectByIdService(id);
		Paiement c=new Paiement();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/paiements")
	public void SavePaiement(@RequestBody Paiement c) {
		pts.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/paiements/{id}")
	public void SupprimerPaiement(@PathVariable("id") int id) {
		pts.supprimerService(id);
	}
	
	
	
	@PutMapping("/paiements")
	public void EditFormation(@RequestBody Paiement c) {
		pts.modifierService(c);
	}

}
