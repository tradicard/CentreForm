package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IContactDao;
import com.intiFormation.dao.IFormationDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;
@Service
public class FormationService implements IFormationService{

	@Autowired
	private IFormationDao fndao;
	
	
	
	

	public FormationService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Formation r) {
		fndao.save(r);
	}
	
	public Optional<Formation> selectByIdService(int id){
		Optional<Formation>op=fndao.findById(id);
		return op;
	}
	
	public List<Formation> getAllService(){
		List<Formation> liste=fndao.findAll();
		return liste;
		
	}
	public Formation findByFormateur_Id(int id) {
		Formation op=fndao.findByFormateur_Id(id);
		return op;
	}
	
	public List<Formation> findByParticipants_Id(int id){
		List<Formation> liste=fndao.findByParticipants_Id(id);
		return liste;
	}
	
	public void supprimerService(int id) {
		fndao.deleteById(id);
	}
	public void modifierService(Formation r) {
		fndao.save(r);
	}

	public IFormationDao getFndao() {
		return fndao;
	}

	public void setFdao(IFormationDao fdao) {
		this.fndao = fdao;
	}
	
}
