package com.intiFormation.entity;

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
