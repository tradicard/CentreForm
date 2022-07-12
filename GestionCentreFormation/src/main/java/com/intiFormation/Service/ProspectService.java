package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IAssistantDao;
import com.intiFormation.dao.ICommercialDao;
import com.intiFormation.dao.IContactDao;
import com.intiFormation.dao.IFormateurDao;
import com.intiFormation.dao.IFormationDao;
import com.intiFormation.dao.IPaiementDao;
import com.intiFormation.dao.IParticipantDao;
import com.intiFormation.dao.IProspectDao;
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Role;
@Service
public class ProspectService implements IProspectService{

	@Autowired
	private IProspectDao prosdao;
	
	
	
	

	public ProspectService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Prospect r) {
		prosdao.save(r);
	}
	
	public Optional<Prospect> selectByIdService(int id){
		Optional<Prospect>op=prosdao.findById(id);
		return op;
	}
	
	public List<Prospect> getAllService(){
		List<Prospect> liste=prosdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		prosdao.deleteById(id);
	}
	public void modifierService(Prospect r) {
		prosdao.save(r);
	}

	public IProspectDao getProsdao() {
		return prosdao;
	}

	public void setProsdao(IProspectDao prosdao) {
		this.prosdao = prosdao;
	}
	
}
