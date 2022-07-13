package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Formateur extends Utilisateur{


	
	@OneToOne(mappedBy = "formateur",fetch = FetchType.EAGER, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private Formation formation;
	@OneToMany(mappedBy = "formateur",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<HistoriqueFormateur> historique;
	@OneToMany(mappedBy = "formateur",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Quizz> quizzs;
	
	
	
	
	
	
	public Formateur(String nom, String prenom, String username, String password, String mail, Role role,
			Formation formation, List<HistoriqueFormateur> historique, List<Quizz> quizzs) {
		super(nom, prenom, username, password, mail, role);
		this.formation = formation;
		this.historique = historique;
		this.quizzs = quizzs;
	}

	public Formateur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Formateur(String nom, String prenom, String username, String password, String mail, Role role) {
		super(nom, prenom, username, password, mail, role);
		// TODO Auto-generated constructor stub
	}




	public Formation getFormation() {
		return formation;
	}

	public void setFormation(Formation formation) {
		this.formation = formation;
	}

	public List<HistoriqueFormateur> getHistorique() {
		return historique;
	}

	public void setHistorique(List<HistoriqueFormateur> historique) {
		this.historique = historique;
	}

	public List<Quizz> getQuizzs() {
		return quizzs;
	}

	public void setQuizzs(List<Quizz> quizzs) {
		this.quizzs = quizzs;
	}

	
	
	

}
