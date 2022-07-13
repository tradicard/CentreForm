package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IPaiementDao;
import com.intiFormation.dao.IQuizzDao;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Quizz;

@Service
public class QuizzService implements IQuizzService{

	@Autowired
	private IQuizzDao qdao;

	public QuizzService() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public void ajouterService(Quizz q) {
		qdao.save(q);
	}
	
	public Optional<Quizz> selectByIdService(int id){
		Optional<Quizz>op=qdao.findById(id);
		return op;
	}
	public List<Quizz> getAllService(){
		List<Quizz> liste=qdao.findAll();
		return liste;
		
	}
	public Quizz findByFormation_IdFormation(int id) {
		Quizz q=qdao.findByFormation_IdFormation(id);
		return q;
	}
	public void supprimerService(int id) {
		qdao.deleteById(id);
	}
	public void modifierService(Quizz q) {
		qdao.save(q);
	}

	public IQuizzDao getQdao() {
		return qdao;
	}

	public void setQdao(IQuizzDao qdao) {
		this.qdao = qdao;
	}

	
}
