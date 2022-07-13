package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intiFormation.dao.IQuestionDao;
import com.intiFormation.entity.Question;
import com.intiFormation.entity.Quizz;

@Service
public class QuestionService implements IQuestionService{

	
	@Autowired
	private IQuestionDao qdao;
	
	public QuestionService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void ajouterService(Question q) {
		qdao.save(q);
	}
	
	public Optional<Question> selectByIdService(int id){
		Optional<Question>op=qdao.findById(id);
		return op;
	}
	public List<Question> getAllService(){
		List<Question> liste=qdao.findAll();
		return liste;
		
	}
	public void supprimerService(int id) {
		qdao.deleteById(id);
	}
	public void modifierService(Question q) {
		qdao.save(q);
	}

	public IQuestionDao getQdao() {
		return qdao;
	}

	public void setQdao(IQuestionDao qdao) {
		this.qdao = qdao;
	}
	
}
