package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;
@Service
public class AssistantService implements IAssistantService{

	@Autowired
	private IAssistantDao adao;
	
	
	
	

	public AssistantService() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Assistant chercherParUsername(String username) {
		return adao.findByUsername(username);
	}

	public void ajouterService(Assistant r) {
		adao.save(r);
	}
	
	public Optional<Assistant> selectByIdService(int id){
		Optional<Assistant>op=adao.findById(id);
		return op;
	}
	
	public List<Assistant> getAllService(){
		List<Assistant> liste=adao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		adao.deleteById(id);
	}
	public void modifierService(Assistant r) {
		adao.save(r);
	}

	public IAssistantDao getAdao() {
		return adao;
	}

	public void setRdao(IAssistantDao rdao) {
		this.adao = adao;
	}
	
}
