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
import com.intiFormation.dao.IRoleDao;
import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Role;
@Service
public class PaiementService implements IPaiementService{

	@Autowired
	private IPaiementDao padao;
	
	
	
	

	public PaiementService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Paiement r) {
		padao.save(r);
	}
	
	public Optional<Paiement> selectByIdService(int id){
		Optional<Paiement>op=padao.findById(id);
		return op;
	}
	
	public List<Paiement> getAllService(){
		List<Paiement> liste=padao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		padao.deleteById(id);
	}
	public void modifierService(Paiement r) {
		padao.save(r);
	}

	public IPaiementDao getPadao() {
		return padao;
	}

	public void setPadao(IPaiementDao padao) {
		this.padao = padao;
	}
	
}
