package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IReponseDao;
import com.intiFormation.entity.Quizz;
import com.intiFormation.entity.Reponse;

@Service
public class ReponseService implements IReponseService{

	@Autowired
	private IReponseDao rdao;

	public ReponseService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Reponse q) {
		rdao.save(q);
	}
	
	public Optional<Reponse> selectByIdService(int id){
		Optional<Reponse>op=rdao.findById(id);
		return op;
	}
	public List<Reponse> getAllService(){
		List<Reponse> liste=rdao.findAll();
		return liste;
		
	}
	
	public List<Reponse> findByQuestion_IdQuestion(int id){
		List<Reponse> liste=rdao.findByQuestion_IdQuestion(id);
		return liste;
	}
	
	public void supprimerService(int id) {
		rdao.deleteById(id);
	}
	public void modifierService(Reponse q) {
		rdao.save(q);
	}
	
	public IReponseDao getRdao() {
		return rdao;
	}

	public void setRdao(IReponseDao rdao) {
		this.rdao = rdao;
	}
	
	
}
