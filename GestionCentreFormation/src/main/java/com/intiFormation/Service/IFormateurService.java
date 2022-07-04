package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Role;




public interface IFormateurService {
	public Formateur chercherParUsername(String username);
	public void modifierService(Formateur r);
	public void supprimerService(int id);
	public List<Formateur> getAllService();
	public Optional<Formateur> selectByIdService(int id);
	public void ajouterService(Formateur r);

}
