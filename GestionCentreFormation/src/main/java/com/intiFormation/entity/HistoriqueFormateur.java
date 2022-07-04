package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class HistoriqueFormateur {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int idHistoriqueFormateur;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormation")
	Formation formation;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormateur")
	Formateur formateur;
	
	
	
	public HistoriqueFormateur(Formation formation, Formateur formateur) {
		super();
		this.formation = formation;
		this.formateur = formateur;
	}
	public HistoriqueFormateur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIdHistoriqueFormateur() {
		return idHistoriqueFormateur;
	}
	public void setIdHistoriqueFormateur(int idHistoriqueFormateur) {
		this.idHistoriqueFormateur = idHistoriqueFormateur;
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
	
	

}
