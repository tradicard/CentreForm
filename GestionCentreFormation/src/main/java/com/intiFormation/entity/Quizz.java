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

@Entity
public class Quizz {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idQuizz;
	
	@OneToMany(mappedBy = "quizz",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	private List<Question> questions;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormation")
	private Formation formation;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormateur")
	private Formateur formateur;
	
	@OneToMany (mappedBy = "quizz",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	private List<Resultat> resultats;
	private int noteRequise;
	private int nbQuestion;
	
	
	public Quizz() {
		super();
		// TODO Auto-generated constructor stub
	}






	public Quizz(List<Question> questions, Formation formation, Formateur formateur, List<Resultat> resultats,
			int noteRequise, int nbQuestion) {
		super();
		this.questions = questions;
		this.formation = formation;
		this.formateur = formateur;
		this.resultats = resultats;
		this.noteRequise = noteRequise;
		this.nbQuestion = nbQuestion;
	}






	public int getIdQuizz() {
		return idQuizz;
	}


	public void setIdQuizz(int idQuizz) {
		this.idQuizz = idQuizz;
	}


	public List<Question> getQuestions() {
		return questions;
	}


	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}


	public Formation getFormation() {
		return formation;
	}


	public void setFormation(Formation formation) {
		this.formation = formation;
	}


	public Formateur getFormateur() {
		return formateur;
	}


	public void setFormateur(Formateur formateur) {
		this.formateur = formateur;
	}


	


	public List<Resultat> getResultats() {
		return resultats;
	}






	public void setResultats(List<Resultat> resultats) {
		this.resultats = resultats;
	}






	public int getNoteRequise() {
		return noteRequise;
	}


	public void setNoteRequise(int noteRequise) {
		this.noteRequise = noteRequise;
	}


	public int getNbQuestion() {
		return nbQuestion;
	}


	public void setNbQuestion(int nbQuestion) {
		this.nbQuestion = nbQuestion;
	}
	
	
	
}
