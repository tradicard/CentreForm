package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Quizz;

public interface IQuizzService {

	public void ajouterService(Quizz q) ;
	public Optional<Quizz> selectByIdService(int id);
	public List<Quizz> getAllService();
	public void modifierService(Quizz q);
	public void supprimerService(int id);
	public Quizz findByFormation_IdFormation(int id);
}
