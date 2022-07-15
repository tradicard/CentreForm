package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Question;
import com.intiFormation.entity.Reponse;

public interface IReponseService {

	public void ajouterService(Reponse q);
	
	public Optional<Reponse> selectByIdService(int id);
	public List<Reponse> getAllService();
	public void supprimerService(int id);
	public void modifierService(Reponse q);
	public List<Reponse> findByQuestion_IdQuestion(int id);
	
}
