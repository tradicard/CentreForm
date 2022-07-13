package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IResultatDao;
import com.intiFormation.entity.Question;
import com.intiFormation.entity.Resultat;

@Service
public class ResultatService implements IResultatService{

	@Autowired
	private IResultatDao rdao;

	public ResultatService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public IResultatDao getRdao() {
		return rdao;
	}

	public void setRdao(IResultatDao rdao) {
		this.rdao = rdao;
	}
	
	public void ajouterService(Resultat q) {
		rdao.save(q);
	}
	
	public Optional<Resultat> selectByIdService(int id){
		Optional<Resultat>op=rdao.findById(id);
		return op;
	}
	public List<Resultat> getAllService(){
		List<Resultat> liste=rdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		rdao.deleteById(id);
	}
	public void modifierService(Resultat q) {
		rdao.save(q);
	}
}
