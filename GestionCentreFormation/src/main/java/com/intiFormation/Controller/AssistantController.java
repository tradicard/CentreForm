package com.intiFormation.Controller;

import java.util.ArrayList;
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
import com.intiFormation.Service.IRoleService;
import com.intiFormation.Service.IUtilisateurService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class AssistantController {
	
	
	@Autowired
	IAssistantService as;
	@Autowired
	BCryptPasswordEncoder bc;
	@Autowired
	IUtilisateurService us;
	@Autowired
	IRoleService rs;
	
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
	public void SaveAssistant(@RequestBody Assistant u) {
		List<Utilisateur> uts=us.getAllService();
		for(int i=0;i<uts.size();i++) {
			if (uts.get(i).getUsername()==u.getUsername()) {
				break;
			}
		}
		
		Optional<Role> op=rs.selectByIdService(5);
		Role r=op.get();
		String pass=u.getPassword();
		pass=bc.encode(pass);
		List<Relance> liste=new ArrayList<Relance> ();
		u=new Assistant(u.getNom(),u.getPrenom(),u.getUsername(),pass,u.getMail(),r,liste);
		as.ajouterService(u);
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
