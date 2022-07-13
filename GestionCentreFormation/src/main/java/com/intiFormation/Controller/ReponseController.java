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

import com.intiFormation.Service.IReponseService;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Reponse;
import com.intiFormation.entity.Utilisateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class ReponseController {

	@Autowired
	IReponseService rSer;
	
	@GetMapping("/reponses")
	public List<Reponse> GestionCommercial() {
		List<Reponse> listec=rSer.getAllService();
		return listec;
	}
	
	@GetMapping("/reponses/{id}")
	public Reponse GestionCommercial(@PathVariable("id") int id) {
		Optional<Reponse> op=rSer.selectByIdService(id);
		Reponse c=new Reponse();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	@PostMapping("/reponses")
	public void SaveCommercial(@RequestBody Reponse u) {
		rSer.ajouterService(u);
	}
	
	
	
	
	@DeleteMapping("/reponses/{id}")
	public void SupprimerCommercial(@PathVariable("id") int id) {
		rSer.supprimerService(id);
	}
	
	
	
	@PutMapping("/reponses")
	public void EditCommercial(@RequestBody Reponse c) {
		rSer.modifierService(c);
	}
}
