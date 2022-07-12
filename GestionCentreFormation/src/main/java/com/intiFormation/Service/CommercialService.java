package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Role;
@Service
public class CommercialService implements ICommercialService{

	@Autowired
	private ICommercialDao comdao;
	
	
	
	

	public CommercialService() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Commercial chercherParUsername(String username) {
		return comdao.findByUsername(username);
	}
	public void ajouterService(Commercial r) {
		comdao.save(r);
	}
	
	public Optional<Commercial> selectByIdService(int id){
		Optional<Commercial>op=comdao.findById(id);
		return op;
	}
	
	public List<Commercial> getAllService(){
		List<Commercial> liste=comdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		comdao.deleteById(id);
	}
	public void modifierService(Commercial r) {
		comdao.save(r);
	}

	public ICommercialDao getComdao() {
		return comdao;
	}

	public void setComdao(ICommercialDao comdao) {
		this.comdao = comdao;
	}
	
}
