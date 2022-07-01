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
public class Formateur extends Utilisateur{


	
	@OneToMany(mappedBy = "formateur",fetch = FetchType.EAGER, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Formation> historiqueFormation;
	
	
	
	
	
	public Formateur(String nom, String prenom, String username, String password, String mail, Role role,
			 List<Formation> historiqueFormation) {
		super(nom, prenom, username, password, mail, role);
		this.historiqueFormation = historiqueFormation;
	}

	public Formateur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Formateur(String nom, String prenom, String username, String password, String mail, Role role) {
		super(nom, prenom, username, password, mail, role);
		// TODO Auto-generated constructor stub
	}




	public List<Formation> getHistoriqueFormation() {
		return historiqueFormation;
	}

	public void setHistoriqueFormation(List<Formation> historiqueFormation) {
		this.historiqueFormation = historiqueFormation;
	}

	
	
	

}
