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

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class RoleController {
	
	
	@Autowired
	IRoleService ros;
	
	@GetMapping("/roles")
	public List<Role> GestionRole() {
		List<Role> listec=ros.getAllService();
		return listec;
	}
	
	@GetMapping("/roles/{id}")
	public Role GestionRole(@PathVariable("id") int id) {
		Optional<Role> op=ros.selectByIdService(id);
		Role c=new Role();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@GetMapping("/rolesBylib/{librole}")
	public Role GestionRole(@PathVariable("librole") String librole) {
		Role op=ros.findByLibrole(librole);

		return op;
	}
	
	@PostMapping("/roles")
	public void SaveRole(@RequestBody Role c) {
		ros.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/roles/{id}")
	public void SupprimerRole(@PathVariable("id") int id) {
		ros.supprimerService(id);
	}
	
	
	
	@PutMapping("/roles")
	public void EditRole(@RequestBody Role c) {
		ros.modifierService(c);
	}

}
