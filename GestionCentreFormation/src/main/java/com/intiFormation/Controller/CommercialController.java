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
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class CommercialController {
	
	
	@Autowired
	ICommercialService coms;
	
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
	
	@PostMapping("/commercials")
	public void SaveCommercial(@RequestBody Commercial c) {
		coms.ajouterService(c);
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
