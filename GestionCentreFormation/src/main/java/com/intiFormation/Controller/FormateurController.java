package com.intiFormation.Controller;

import java.util.ArrayList;
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
import com.intiFormation.entity.Assistant;

import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class FormateurController {
	
	
	@Autowired
	IFormateurService frs;
	@Autowired
	IFormationService fos;
	
	@GetMapping("/formateurs")
	public List<Formateur> GestionFormateur() {
		List<Formateur> listec=frs.getAllService();
		return listec;
	}
	
	@GetMapping("/formateurssansformation")
	public List<Formateur> GestionFormateur2() {
		
		List<Formateur> liste=frs.getAllService();
		List<Formation> pass=fos.getAllService();
		List<Formateur> citoyens=new ArrayList<Formateur>();
		boolean verif;
		
		for (int i = 0; i < liste.size(); i++) {
		      verif=true;
		      for (int j = 0; j < pass.size(); j++) {
		        
		        if (pass.get(j).getFormateur().getId()==liste.get(i).getId()) {
		          verif=false;
		          System.out.println("Verif boucle 2ème boucle for"+verif);
		        }
		      }
		      if(verif){
		    	System.out.println("verif 1ère boucle for"+verif);
		        citoyens.add(liste.get(i));
		      }
		    }
		System.out.println(liste.size());
		System.out.println(citoyens.size());
		return citoyens;
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
	public void SaveContact(@RequestBody Formateur c) {
		frs.ajouterService(c);
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
