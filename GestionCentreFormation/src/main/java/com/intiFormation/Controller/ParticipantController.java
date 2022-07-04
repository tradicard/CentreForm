package com.intiFormation.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
import com.intiFormation.Service.IRoleService;
import com.intiFormation.Service.IUtilisateurService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class ParticipantController {
	
	
	@Autowired
	IParticipantService parts;
	@Autowired
	IRoleService rs;
	@Autowired
	BCryptPasswordEncoder bc;
	@Autowired
	IUtilisateurService us;
	
	@Autowired
	IFormationService formationService;
	
	@GetMapping("/participants")
	public List<Participant> GestionParticipant() {
		List<Participant> listec=parts.getAllService();
		return listec;
	}
	
	@GetMapping("/participants/{id}")
	public Participant GestionParticipant(@PathVariable("id") int id) {
		Optional<Participant> op=parts.selectByIdService(id);
		Participant c=new Participant();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@GetMapping("/participantsus/{username}")
	public Participant GestionUtilisateur(@PathVariable("username") String username) {
		Participant op=parts.chercherParUsername(username);

		return op;
	}
	
	@PostMapping("/participants")
	public void SaveParticipant(@RequestBody Participant u) {
		List<Utilisateur> uts=us.getAllService();
		for(int i=0;i<uts.size();i++) {
			if (uts.get(i).getUsername()==u.getUsername()) {
				break;
			}
		}
		
		Optional<Role> op=rs.selectByIdService(1);
		Role r=op.get();
		String pass=u.getPassword();
		pass=bc.encode(pass);
		u=new Participant(u.getNom(),u.getPrenom(),u.getUsername(),pass,u.getMail(),r);
		parts.ajouterService(u);
	}
	
	
	
	
	@DeleteMapping("/participants/{id}")
	public void SupprimerParticipant(@PathVariable("id") int id) {
		parts.supprimerService(id);
	}
	
	
	
	@PutMapping("/participants")
	public void EditFormation(@RequestBody Participant c) {
		parts.modifierService(c);
	}

}
