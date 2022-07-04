package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.JoinColumn;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Participant extends Utilisateur {
	
	//private int idParticipant;
	@ManyToMany
	@JoinTable(name="T_Participant_Formation",
	joinColumns=@JoinColumn(name="idParticipant"),
	inverseJoinColumns=@JoinColumn(name="idFormation"))
	private List<Formation> formations;
	@OneToMany(mappedBy = "participant",fetch = FetchType.LAZY, cascade = { CascadeType.REMOVE, CascadeType.MERGE}, orphanRemoval = true)
	@JsonIgnore
	private List<HistoriqueParticipant> historique;
	@OneToMany(mappedBy = "participant",fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Relance> relances;
	@OneToMany(mappedBy = "participant",fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Paiement> paiements;
	
	
	public Participant(String nom, String prenom, String username, String password, String mail, Role role) {
		super(nom, prenom, username, password, mail, role);
	}
	
	
	

	public Participant(String nom, String prenom, String username, String password, String mail, Role role,
			List<Formation> formations, List<HistoriqueParticipant> historique, List<Relance> relances,
			List<Paiement> paiements) {
		super(nom, prenom, username, password, mail, role);
		this.formations = formations;
		this.historique = historique;
		this.relances = relances;
		this.paiements = paiements;
	}

	public Participant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Formation> getFormations() {
		return formations;
	}
	public void setFormations(List<Formation> formations) {
		this.formations = formations;
	}
	public List<Relance> getRelances() {
		return relances;
	}
	public void setRelances(List<Relance> relances) {
		this.relances = relances;
	}

	public List<Paiement> getPaiements() {
		return paiements;
	}

	public void setPaiements(List<Paiement> paiements) {
		this.paiements = paiements;
	}

	public List<HistoriqueParticipant> getHistorique() {
		return historique;
	}

	public void setHistorique(List<HistoriqueParticipant> historique) {
		this.historique = historique;
	}
	
	
	
	

}
