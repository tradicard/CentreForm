package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Resultat;

public interface IResultatService {

	public void ajouterService(Resultat q);
	
	public Optional<Resultat> selectByIdService(int id);
	public List<Resultat> getAllService();
	public void supprimerService(int id) ;
	public void modifierService(Resultat q) ;
}
