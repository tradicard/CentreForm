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
import com.intiFormation.Service.ICommercialService;
import com.intiFormation.Service.IRoleService;
import com.intiFormation.Service.IUtilisateurService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class CommercialController {
	
	
	@Autowired
	ICommercialService coms;
	@Autowired
	BCryptPasswordEncoder bc;
	@Autowired
	IUtilisateurService us;
	@Autowired
	IRoleService rs;
	
	@GetMapping("/commercials")
	public List<Commercial> GestionCommercial() {
		List<Commercial> listec=coms.getAllService();
		return listec;
	}
	
	@GetMapping("/commercials/{id}")
	public Commercial GestionCommercial(@PathVariable("id") int id) {
		Optional<Commercial> op=coms.selectByIdService(id);
		Commercial c=new Commercial();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	@GetMapping("/commercials/{username}")
	public Commercial GestionUtilisateur(@PathVariable("username") String username) {
		Commercial op=coms.chercherParUsername(username);

		return op;
	}
	@PostMapping("/commercials")
	public void SaveCommercial(@RequestBody Commercial u) {
		List<Utilisateur> uts=us.getAllService();
		for(int i=0;i<uts.size();i++) {
			if (uts.get(i).getUsername()==u.getUsername()) {
				break;
			}
		}
		
		Optional<Role> op=rs.selectByIdService(4);
		Role r=op.get();
		String pass=u.getPassword();
		pass=bc.encode(pass);
		List<Contact> liste=new ArrayList <Contact>();
		u=new Commercial(u.getNom(),u.getPrenom(),u.getUsername(),pass,u.getMail(),r,liste);
		coms.ajouterService(u);
	}
	
	
	
	
	@DeleteMapping("/commercials/{id}")
	public void SupprimerCommercial(@PathVariable("id") int id) {
		coms.supprimerService(id);
	}
	
	
	
	@PutMapping("/commercials")
	public void EditCommercial(@RequestBody Commercial c) {
		coms.modifierService(c);
	}

}
