package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Prospect {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idProspect;
	private String nom;
	private String prenom;
	private String mail;
	private String tel;
	@OneToMany(mappedBy = "prospect",fetch = FetchType.EAGER, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Contact> contacts;
	
	
	
	
	public Prospect(String nom, String prenom, String mail, String tel, List<Contact> contacts) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.mail = mail;
		this.tel = tel;
		this.contacts = contacts;
	}
	public Prospect() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIdProspect() {
		return idProspect;
	}
	public void setIdProspect(int idProspect) {
		this.idProspect = idProspect;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public List<Contact> getContacts() {
		return contacts;
	}
	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
	
	

}
