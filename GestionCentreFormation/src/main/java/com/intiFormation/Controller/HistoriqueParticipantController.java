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
import com.intiFormation.Service.IHistoriqueParticipantService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.HistoriqueParticipant;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class HistoriqueParticipantController {
	
	
	@Autowired
	IHistoriqueParticipantService hps;
	
	@GetMapping("/historiqueparticipants")
	public List<HistoriqueParticipant> GestionHistoriqueParticipant() {
		List<HistoriqueParticipant> listec=hps.getAllService();
		return listec;
	}
	
	@GetMapping("/historiqueparticipants/{id}")
	public HistoriqueParticipant GestionHistoriqueParticipant(@PathVariable("id") int id) {
		Optional<HistoriqueParticipant> op=hps.selectByIdService(id);
		HistoriqueParticipant c=new HistoriqueParticipant();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@PostMapping("/historiqueparticipants")
	public void SaveHistoriqueParticipant(@RequestBody HistoriqueParticipant c) {
		hps.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/historiqueparticipants/{id}")
	public void SupprimerHistoriqueParticipant(@PathVariable("id") int id) {
		hps.supprimerService(id);
	}
	
	
	
	@PutMapping("/historiqueparticipants")
	public void EditHistoriqueParticipant(@RequestBody HistoriqueParticipant c) {
		hps.modifierService(c);
	}

}
