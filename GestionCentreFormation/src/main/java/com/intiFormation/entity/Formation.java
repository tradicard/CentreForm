package com.intiFormation.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Formation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idFormation;
	private String libFormation;
	private String description;
	private String dateDebut;
	private String dateFin;
	private int prix;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idFormateur")
	private Formateur formateur ;
	@ManyToMany(mappedBy = "formations")
	private List<Participant> participants ;
	
	
	
	public Formation(String libFormation, String description, String dateDebut, String dateFin, int prix,
			Formateur formateur, List<Participant> participants) {
		super();
		this.libFormation = libFormation;
		this.description = description;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.prix = prix;
		this.formateur = formateur;
		this.participants = participants;
	}
	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIdFormation() {
		return idFormation;
	}
	public void setIdFormation(int idFormation) {
		this.idFormation = idFormation;
	}
	public String getLibFormation() {
		return libFormation;
	}
	public void setLibFormation(String libFormation) {
		this.libFormation = libFormation;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(String dateDebut) {
		this.dateDebut = dateDebut;
	}
	public String getDateFin() {
		return dateFin;
	}
	public void setDateFin(String dateFin) {
		this.dateFin = dateFin;
	}
	public int getPrix() {
		return prix;
	}
	public void setPrix(int prix) {
		this.prix = prix;
	}
	public Formateur getFormateur() {
		return formateur;
	}
	public void setFormateur(Formateur formateur) {
		this.formateur = formateur;
	}
	public List<Participant> getParticipants() {
		return participants;
	}
	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}
	
	
	

}
