package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Commercial extends Utilisateur{

	@OneToMany(mappedBy = "commercial",fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Contact> contacts;

	
	
	
	
	public Commercial(String nom, String prenom, String username, String password, String mail, Role role,
			List<Contact> contacts) {
		super(nom, prenom, username, password, mail, role);
		this.contacts = contacts;
	}
	
	
	public Commercial() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Contact> getContacts() {
		return contacts;
	}
	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
	
	
	
}
