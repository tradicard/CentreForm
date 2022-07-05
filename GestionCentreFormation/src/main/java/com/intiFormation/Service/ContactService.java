package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IContactDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Role;
@Service
public class ContactService implements IContactService{

	@Autowired
	private IContactDao condao;
	
	
	
	

	public ContactService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Contact r) {
		condao.save(r);
	}
	public List<Contact> findByProspect_nom(String nom){
		List<Contact> liste=condao.findByProspect_nom(nom);
		return liste;
	}
	public Optional<Contact> selectByIdService(int id){
		Optional<Contact>op=condao.findById(id);
		return op;
	}
	
	public List<Contact> getAllService(){
		List<Contact> liste=condao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		condao.deleteById(id);
	}
	public void modifierService(Contact r) {
		condao.save(r);
	}

	public IContactDao getCondao() {
		return condao;
	}

	public void setCondao(IContactDao condao) {
		this.condao = condao;
	}
	
}
