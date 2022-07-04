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
import com.intiFormation.Service.IRoleService;
import com.intiFormation.Service.IUtilisateurService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class FormateurController {
	
	
	@Autowired
	IFormateurService frs;
	@Autowired
	IRoleService rs;
	@Autowired
	BCryptPasswordEncoder bc;
	@Autowired
	IUtilisateurService us;
	
	@GetMapping("/formateurs")
	public List<Formateur> GestionFormateur() {
		List<Formateur> listec=frs.getAllService();
		return listec;
	}
	
	@GetMapping("/formateurs/{id}")
	public Formateur GestionFormateur(@PathVariable("id") int id) {
		Optional<Formateur> op=frs.selectByIdService(id);
		Formateur c=new Formateur();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/formateurs")
	public void SaveContact(@RequestBody Formateur u) {
		List<Utilisateur> uts=us.getAllService();
		for(int i=0;i<uts.size();i++) {
			if (uts.get(i).getUsername()==u.getUsername()) {
				break;
			}
		}
		
		Optional<Role> op=rs.selectByIdService(3);
		Role r=op.get();
		String pass=u.getPassword();
		pass=bc.encode(pass);
		u=new Formateur(u.getNom(),u.getPrenom(),u.getUsername(),pass,u.getMail(),r);
		frs.ajouterService(u);
	}
	
	
	
	
	@DeleteMapping("/formateurs/{id}")
	public void SupprimerFormateur(@PathVariable("id") int id) {
		frs.supprimerService(id);
	}
	
	
	
	@PutMapping("/formateurs")
	public void EditFormateur(@RequestBody Formateur c) {
		frs.modifierService(c);
	}

}
