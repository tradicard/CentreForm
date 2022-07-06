package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Paiement {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idPaiement;
	private String dateFacture;
	private String dateDernierPaiement;
	private String dateProchainPaiement;
	private int montant;
	private int reste;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idParticipant")
	private Participant participant;
	
	
	
	public Paiement(String dateFacture, int montant, int reste, Participant participant) {
		super();
		this.dateFacture = dateFacture;
		this.montant = montant;
		this.reste = reste;
		this.participant = participant;
	}



	public Paiement() {
		super();
		// TODO Auto-generated constructor stub
	}



	public int getIdPaiement() {
		return idPaiement;
	}



	public void setIdPaiement(int idPaiement) {
		this.idPaiement = idPaiement;
	}






	public String getDateFacture() {
		return dateFacture;
	}



	public void setDateFacture(String dateFacture) {
		this.dateFacture = dateFacture;
	}



	public String getDateDernierPaiement() {
		return dateDernierPaiement;
	}



	public void setDateDernierPaiement(String dateDernierPaiement) {
		this.dateDernierPaiement = dateDernierPaiement;
	}



	public String getDateProchainPaiement() {
		return dateProchainPaiement;
	}



	public void setDateProchainPaiement(String dateProchainPaiement) {
		this.dateProchainPaiement = dateProchainPaiement;
	}



	public int getMontant() {
		return montant;
	}



	public void setMontant(int montant) {
		this.montant = montant;
	}



	public int getReste() {
		return reste;
	}



	public void setReste(int reste) {
		this.reste = reste;
	}



	public Participant getParticipant() {
		return participant;
	}



	public void setParticipant(Participant participant) {
		this.participant = participant;
	}
	
	
}
