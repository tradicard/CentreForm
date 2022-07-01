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
import com.intiFormation.Service.IRoleService;
import com.intiFormation.Service.IUtilisateurService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class UtilisateurController {
	
	
	@Autowired
	IUtilisateurService us;
	
	@GetMapping("/utilisateurs")
	public List<Utilisateur> GestionUtilisateur() {
		List<Utilisateur> listec=us.getAllService();
		return listec;
	}
	
	@GetMapping("/utilisateurs/{id}")
	public Utilisateur GestionUtilisateur(@PathVariable("id") int id) {
		Optional<Utilisateur> op=us.selectByIdService(id);
		Utilisateur c=new Utilisateur();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@GetMapping("/utilisateurs/{username}")
	public Utilisateur GestionUtilisateur(@PathVariable("username") String username) {
		Utilisateur op=us.chercherParUsername(username);

		return op;
	}
	
	@PostMapping("/utilisateurs")
	public void SaveUtilisateur(@RequestBody Utilisateur c) {
		us.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/utilisateurs/{id}")
	public void SupprimerUtilisateur(@PathVariable("id") int id) {
		us.supprimerService(id);
	}
	
	
	
	@PutMapping("/utilisateurs")
	public void EditUtilisateur(@RequestBody Utilisateur c) {
		us.modifierService(c);
	}

}
