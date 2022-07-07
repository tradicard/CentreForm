package com.intiFormation.entity;

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
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idContact;
	private String dateContact;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idProspect")
	private Prospect prospect;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="idCommercial")
	private Commercial commercial;
	
	
	
	
	public Contact(String dateContact, Prospect prospect, Commercial commercial) {
		super();
		this.dateContact = dateContact;
		this.prospect = prospect;
		this.commercial = commercial;
	}
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getIdContact() {
		return idContact;
	}
	public void setIdContact(int idContact) {
		this.idContact = idContact;
	}
	public Prospect getProspect() {
		return prospect;
	}
	public void setProspect(Prospect prospect) {
		this.prospect = prospect;
	}
	public Commercial getCommercial() {
		return commercial;
	}
	public void setCommercial(Commercial commercial) {
		this.commercial = commercial;
	}
	public String getDateContact() {
		return dateContact;
	}
	public void setDateContact(String dateContact) {
		this.dateContact = dateContact;
	}
	@Override
	public String toString() {
		return "Vous avez une réunion prévue avec "+ commercial.getNom()+" "+commercial.getPrenom()+"le "+ dateContact;
	}
	
	
	

}
