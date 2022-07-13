package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Question;

public interface IQuestionService {

	public void ajouterService(Question q);
	
	public Optional<Question> selectByIdService(int id);
	public List<Question> getAllService();
	public void supprimerService(int id) ;
	public void modifierService(Question q);
}
