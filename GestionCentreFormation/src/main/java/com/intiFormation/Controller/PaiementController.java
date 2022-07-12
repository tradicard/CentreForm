package com.intiFormation.Controller;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.intiFormation.Service.IAssistantService;
import com.intiFormation.Service.ICommercialService;
import com.intiFormation.Service.IContactService;
import com.intiFormation.Service.IFormateurService;
import com.intiFormation.Service.IFormationService;
import com.intiFormation.Service.IPaiementService;
import com.intiFormation.Service.IParticipantService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class PaiementController {
	
	
	@Autowired
	IPaiementService pts;
	@Autowired
	IParticipantService parts ;
	
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
	
	@GetMapping("/paiementsidp/{id}")
	public List<Paiement> PaiementAvecIdParticipant(@PathVariable("id") int idParticipant) {
		List<Paiement> c=pts.findByParticipant_Id(idParticipant);
		return c;
	}
	
	@PostMapping("/paiements")
	public void SavePaiement(@RequestBody Paiement c) {
		//Date facturation
		LocalDate localDate = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		String formattedString = localDate.format(formatter);
		c.setDateFacture(formattedString);
		
		//Date prochain paiement
		LocalDate returnvalue= localDate.plusDays(3);
		c.setDateProchainPaiement(returnvalue.format(formatter));
		
		
		pts.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/paiements/{id}")
	public void SupprimerPaiement(@PathVariable("id") int id) {
		pts.supprimerService(id);
	}
	
	
	
	@PutMapping("/paiements")
	public void EditFormation(@RequestParam("idp") int id,@RequestParam("valeur") int valeur,@RequestParam ("idPaiement") int idPaiement) {
		Paiement paie=pts.selectByIdService(idPaiement).get();
		int compte=paie.getParticipant().getCompte();
		int reste=paie.getReste();
		reste=reste-valeur;
		compte=compte-valeur;
		paie.setReste(reste);
		paie.getParticipant().setCompte(compte);
		
		//Date dernier paiement
		LocalDate localDate = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		String formattedString = localDate.format(formatter);
		paie.setDateDernierPaiement(formattedString);
		
		//Date prochain paiement
		LocalDate returnvalue= localDate.plusMonths(1);
		paie.setDateProchainPaiement(returnvalue.format(formatter));
		
		pts.modifierService(paie);
	}

}
