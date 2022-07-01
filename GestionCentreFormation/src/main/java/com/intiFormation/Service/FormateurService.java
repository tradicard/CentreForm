package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IContactDao;
import com.intiFormation.dao.IFormateurDao;
import com.intiFormation.dao.IFormationDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;

public class FormateurService implements IFormateurService{

	@Autowired
	private IFormateurDao fordao;
	
	
	
	

	public FormateurService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Formateur r) {
		fordao.save(r);
	}
	
	public Optional<Formateur> selectByIdService(int id){
		Optional<Formateur>op=fordao.findById(id);
		return op;
	}
	
	public List<Formateur> getAllService(){
		List<Formateur> liste=fordao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		fordao.deleteById(id);
	}
	public void modifierService(Formateur r) {
		fordao.save(r);
	}

	public IFormateurDao getFordao() {
		return fordao;
	}

	public void setFordao(IFormateurDao fordao) {
		this.fordao = fordao;
	}
	
}
