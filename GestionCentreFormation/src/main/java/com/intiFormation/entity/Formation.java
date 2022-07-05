package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@OneToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idFormateur")
	private Formateur formateur ;
	@OneToMany(mappedBy = "formation",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<HistoriqueFormateur> historiqueFormateur;
	@OneToMany(mappedBy = "formation",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<HistoriqueParticipant> historiqueParticipant;
	@ManyToMany(mappedBy = "formations")

	private List<Participant> participants ;
	
	
	
	
	public Formation(String libFormation, String description, String dateDebut, String dateFin, int prix,
			Formateur formateur, List<HistoriqueFormateur> historiqueFormateur,
			List<HistoriqueParticipant> historiqueParticipant, List<Participant> participants) {
		super();
		this.libFormation = libFormation;
		this.description = description;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.prix = prix;
		this.formateur = formateur;
		this.historiqueFormateur = historiqueFormateur;
		this.historiqueParticipant = historiqueParticipant;
		this.participants = participants;
	}
	public Formation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Formation(String libFormation, String description, String dateDebut, String dateFin, int prix) {
		super();
		this.libFormation = libFormation;
		this.description = description;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.prix = prix;
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
	public List<HistoriqueFormateur> getHistoriqueFormateur() {
		return historiqueFormateur;
	}
	public void setHistoriqueFormateur(List<HistoriqueFormateur> historiqueFormateur) {
		this.historiqueFormateur = historiqueFormateur;
	}
	public List<HistoriqueParticipant> getHistoriqueParticipant() {
		return historiqueParticipant;
	}
	public void setHistoriqueParticipant(List<HistoriqueParticipant> historiqueParticipant) {
		this.historiqueParticipant = historiqueParticipant;
	}
	
	
	

}
