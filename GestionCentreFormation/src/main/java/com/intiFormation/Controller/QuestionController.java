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
import com.intiFormation.Service.IReponseService;
import com.intiFormation.entity.Question;
import com.intiFormation.entity.Reponse;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class QuestionController {

	@Autowired
	IQuestionService rSer;
	
	@GetMapping("/questions")
	public List<Question> GestionCommercial() {
		List<Question> listec=rSer.getAllService();
		return listec;
	}
	@GetMapping("/questionsparquizz/{id}")
	public List<Question> GestionCommercial2(@PathVariable("id") int id) {
		List<Question> listec=rSer.findByQuizz_IdQuizz(id);
		return listec;
	}
	
	@GetMapping("/questions/{id}")
	public Question GestionCommercial(@PathVariable("id") int id) {
		Optional<Question> op=rSer.selectByIdService(id);
		Question c=new Question();
		if (op.isPresent()) {
			c=op.get();
		}
		return c;
	}
	@PostMapping("/questions")
	public Question SaveCommercial(@RequestBody Question u) {
		rSer.ajouterService(u);
		return u;
	}
	
	
	
	
	@DeleteMapping("/questions/{id}")
	public void SupprimerCommercial(@PathVariable("id") int id) {
		rSer.supprimerService(id);
	}
	
	
	
	@PutMapping("/questions")
	public void EditCommercial(@RequestBody Question c) {
		rSer.modifierService(c);
	}
}
