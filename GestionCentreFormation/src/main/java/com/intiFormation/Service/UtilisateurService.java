package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.intiFormation.dao.IUtilisateurDao;
import com.intiFormation.entity.Utilisateur;


@Service
public class UtilisateurService implements IUtilisateurService{
	
	@Autowired
	IUtilisateurDao udao;
	
	
	
	public UtilisateurService() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Utilisateur chercherParUsername(String username) {
		return udao.findByUsername(username);
	}
	public void ajouterService(Utilisateur u) {
		udao.save(u);
	}
	
	public Optional<Utilisateur> selectByIdService(int id){
		Optional<Utilisateur>op=udao.findById(id);
		return op;
	}
	
	public List<Utilisateur> getAllService(){
		List<Utilisateur> liste=udao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		udao.deleteById(id);
	}
	public void modifierService(Utilisateur u) {
		udao.save(u);
	}

}
