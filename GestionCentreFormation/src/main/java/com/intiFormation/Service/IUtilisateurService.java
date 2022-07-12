package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Utilisateur;



public interface IUtilisateurService {
	
	public Utilisateur chercherParUsername(String username);
	public void supprimerService(int id);
	public void modifierService(Utilisateur u);
	public List<Utilisateur> getAllService();
	public Optional<Utilisateur> selectByIdService(int id);
	public void ajouterService(Utilisateur u);
	public List<Utilisateur> findByRole_IdRole(int idRole);

}
