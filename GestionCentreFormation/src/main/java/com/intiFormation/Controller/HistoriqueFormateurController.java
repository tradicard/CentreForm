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
import com.intiFormation.Service.IHistoriqueFormateurService;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.HistoriqueFormateur;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class HistoriqueFormateurController {
	
	
	@Autowired
	IHistoriqueFormateurService hfs;
	
	@GetMapping("/historiqueformateurs")
	public List<HistoriqueFormateur> GestionHistoriqueFormateur() {
		List<HistoriqueFormateur> listec=hfs.getAllService();
		return listec;
	}
	
	@GetMapping("/historiqueformateurs/{id}")
	public HistoriqueFormateur GestionHistoriqueFormateur(@PathVariable("id") int id) {
		Optional<HistoriqueFormateur> op=hfs.selectByIdService(id);
		HistoriqueFormateur c=new HistoriqueFormateur();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	//recup HistoriqueFormateurs en fonction de leur id 
	@GetMapping("/historiqueformateursidFormateur/{id}")
	public List<HistoriqueFormateur> listeFormationsIdFormateur(@PathVariable ("id") int id)
	{
		//en cours
		List<HistoriqueFormateur>liste=hfs.findByFormateur_id(id); 
		return liste; 
	}
	
	
	
	@PostMapping("/historiqueformateurs")
	public void SaveHistoriqueFormateur(@RequestBody HistoriqueFormateur c) {
		hfs.ajouterService(c);
	}
	
	
	
	
	@DeleteMapping("/historiqueformateurs/{id}")
	public void SupprimerHistoriqueFormateur(@PathVariable("id") int id) {
		hfs.supprimerService(id);
	}
	
	
	
	@PutMapping("/historiqueformateurs")
	public void EditHistoriqueFormateur(@RequestBody HistoriqueFormateur c) {
		hfs.modifierService(c);
	}

}
