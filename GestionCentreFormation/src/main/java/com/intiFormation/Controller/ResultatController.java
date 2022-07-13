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

import com.intiFormation.Service.IQuestionService;
import com.intiFormation.Service.IResultatService;
import com.intiFormation.entity.Question;
import com.intiFormation.entity.Resultat;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class ResultatController {

	@Autowired
	IResultatService rSer;
	
	@GetMapping("/resultats")
	public List<Resultat> GestionCommercial() {
		List<Resultat> listec=rSer.getAllService();
		return listec;
	}
	
	@GetMapping("/resultats/{id}")
	public Resultat GestionCommercial(@PathVariable("id") int id) {
		Optional<Resultat> op=rSer.selectByIdService(id);
		Resultat c=new Resultat();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	@PostMapping("/resultats")
	public void SaveCommercial(@RequestBody Resultat u) {
		rSer.ajouterService(u);
	}
	
	
	
	
	@DeleteMapping("/resultats/{id}")
	public void SupprimerCommercial(@PathVariable("id") int id) {
		rSer.supprimerService(id);
	}
	
	
	
	@PutMapping("/resultats")
	public void EditCommercial(@RequestBody Resultat c) {
		rSer.modifierService(c);
	}
}
