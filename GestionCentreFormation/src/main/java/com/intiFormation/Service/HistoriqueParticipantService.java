package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.IHistoriqueFormateurDao;
import com.intiFormation.dao.IHistoriqueParticipantDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.HistoriqueFormateur;
import com.intiFormation.entity.HistoriqueParticipant;
import com.intiFormation.entity.Role;
@Service
public class HistoriqueParticipantService implements IHistoriqueParticipantService{

	@Autowired
	private IHistoriqueParticipantDao hpdao;
	
	
	public List <HistoriqueParticipant> findByParticipant_Id(int id)
	{
		List<HistoriqueParticipant> historique=hpdao.findByParticipant_Id(id);	
		return historique;
	}
	

	public HistoriqueParticipantService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(HistoriqueParticipant r) {
		hpdao.save(r);
	}
	
	public Optional<HistoriqueParticipant> selectByIdService(int id){
		Optional<HistoriqueParticipant>op=hpdao.findById(id);
		return op;
	}
	
	public List<HistoriqueParticipant> getAllService(){
		List<HistoriqueParticipant> liste=hpdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		hpdao.deleteById(id);
	}
	public void modifierService(HistoriqueParticipant r) {
		hpdao.save(r);
	}

	public IHistoriqueParticipantDao getHpdao() {
		return hpdao;
	}

	public void setHpdao(IHistoriqueParticipantDao hpdao) {
		this.hpdao = hpdao;
	}
	
}
