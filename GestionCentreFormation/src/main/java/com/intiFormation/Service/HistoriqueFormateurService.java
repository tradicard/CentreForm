package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.IHistoriqueFormateurDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.HistoriqueFormateur;
import com.intiFormation.entity.Role;
@Service
public class HistoriqueFormateurService implements IHistoriqueFormateurService{

	@Autowired
	private IHistoriqueFormateurDao hfdao;
	
	
	
	

	public HistoriqueFormateurService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(HistoriqueFormateur r) {
		hfdao.save(r);
	}
	
	public Optional<HistoriqueFormateur> selectByIdService(int id){
		Optional<HistoriqueFormateur>op=hfdao.findById(id);
		return op;
	}
	
	public List<HistoriqueFormateur> getAllService(){
		List<HistoriqueFormateur> liste=hfdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		hfdao.deleteById(id);
	}
	public void modifierService(HistoriqueFormateur r) {
		hfdao.save(r);
	}

	public IHistoriqueFormateurDao getHfdao() {
		return hfdao;
	}

	public void setHfdao(IHistoriqueFormateurDao hfdao) {
		this.hfdao = hfdao;
	}
	
}
