package com.intiFormation.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;

@Entity
public class Relance {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idRelance;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idParticipant")
	private Participant participant;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="id")
	private Assistant assistant;
	
	
	//Message du mail de relance
	@Override
	public String toString() {
		//Rajouter message avec liste d'attributs
		return ("Monsieur Madame,\n"+this.getParticipant().getNom()+", il vous reste à payer un certain montant de la formation. \n"
				+ "Veuillez-s'il vous plait renouveller votre paiement.\n"
				+ "Bien cordialement, \n"
				+ this.getAssistant().getNom()+this.getAssistant().getPrenom());
	}
	
	
	public Relance(Participant participant, Assistant assistant) {
		super();
		this.participant = participant;
		this.assistant = assistant;
	}
	public Relance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIdRelance() {
		return idRelance;
	}
	public void setIdRelance(int idRelance) {
		this.idRelance = idRelance;
	}
	public Participant getParticipant() {
		return participant;
	}
	public void setParticipant(Participant participant) {
		this.participant = participant;
	}
	public Assistant getAssistant() {
		return assistant;
	}
	public void setAssistant(Assistant assistant) {
		this.assistant = assistant;
	}
	
	

}
