package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Resultat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idResultat;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idParticipant")
	private Participant participant;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idQuizz")
	private Quizz quizz;
	private int note;
	private boolean reussite;
	public Resultat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Resultat(Participant participant, Quizz quizz, int note, boolean reussite) {
		super();
		this.participant = participant;
		this.quizz = quizz;
		this.note = note;
		this.reussite = reussite;
	}
	public int getIdResultat() {
		return idResultat;
	}
	public void setIdResultat(int idResultat) {
		this.idResultat = idResultat;
	}
	public Participant getParticipant() {
		return participant;
	}
	public void setParticipant(Participant participant) {
		this.participant = participant;
	}
	public Quizz getQuizz() {
		return quizz;
	}
	public void setQuizz(Quizz quizz) {
		this.quizz = quizz;
	}
	public int getNote() {
		return note;
	}
	public void setNote(int note) {
		this.note = note;
	}
	public boolean isReussite() {
		return reussite;
	}
	public void setReussite(boolean reussite) {
		this.reussite = reussite;
	}
	
	
}
