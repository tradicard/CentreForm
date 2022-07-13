package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Reponse {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idReponse;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idQuestion")
	private Question question;
	
	private String detail;
	private boolean correct;
	
	
	public Reponse(Question question, String detail, boolean correct) {
		super();
		this.question = question;
		this.detail = detail;
		this.correct = correct;
	}
	public Reponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIdReponse() {
		return idReponse;
	}
	public void setIdReponse(int idReponse) {
		this.idReponse = idReponse;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public boolean isCorrect() {
		return correct;
	}
	public void setCorrect(boolean correct) {
		this.correct = correct;
	}
	
	
}
