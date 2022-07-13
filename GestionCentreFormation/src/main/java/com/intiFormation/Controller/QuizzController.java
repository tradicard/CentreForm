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
import com.intiFormation.Service.IQuizzService;
import com.intiFormation.entity.Question;
import com.intiFormation.entity.Quizz;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class QuizzController {

	@Autowired
	IQuizzService rSer;
	
	@GetMapping("/quizz")
	public List<Quizz> GestionCommercial() {
		List<Quizz> listec=rSer.getAllService();
		return listec;
	}
	
	@GetMapping("/quizz/{id}")
	public Quizz GestionCommercial(@PathVariable("id") int id) {
		Optional<Quizz> op=rSer.selectByIdService(id);
		Quizz c=new Quizz();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	
	@GetMapping("/quizzz/{id}")
	public Quizz GestionCommercial2(@PathVariable("id") int id) {
		Quizz op=rSer.findByFormation_IdFormation(id);

		return op;
	}
	
	@PostMapping("/quizz")
	public Quizz SaveCommercial(@RequestBody Quizz u) {
		rSer.ajouterService(u);
		return u;
	}
	
	
	
	
	@DeleteMapping("/quizz/{id}")
	public void SupprimerCommercial(@PathVariable("id") int id) {
		rSer.supprimerService(id);
	}
	
	
	
	@PutMapping("/quizz")
	public void EditCommercial(@RequestBody Quizz c) {
		rSer.modifierService(c);
	}
}
