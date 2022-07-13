package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idQuestion;
	
	@OneToMany(mappedBy = "question",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Reponse> reponses;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idQuizz")
	private Quizz quizz;
	
	private String intitule;
	
	private int tempsReponse;
	
	
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}







	public Question(List<Reponse> reponses, Quizz quizz, String intitule, int tempsReponse) {
		super();
		this.reponses = reponses;
		this.quizz = quizz;
		this.intitule = intitule;
		this.tempsReponse = tempsReponse;
	}







	public int getIdQuestion() {
		return idQuestion;
	}



	public void setIdQuestion(int idQuestion) {
		this.idQuestion = idQuestion;
	}



	public List<Reponse> getReponses() {
		return reponses;
	}



	public void setReponses(List<Reponse> reponses) {
		this.reponses = reponses;
	}



	public Quizz getQuizz() {
		return quizz;
	}



	public void setQuizz(Quizz quizz) {
		this.quizz = quizz;
	}



	public String getIntitule() {
		return intitule;
	}



	public void setIntitule(String intitule) {
		this.intitule = intitule;
	}



	public int getTempsReponse() {
		return tempsReponse;
	}



	public void setTempsReponse(int tempsReponse) {
		this.tempsReponse = tempsReponse;
	}



	
	
}
