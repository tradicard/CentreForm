package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class Assistant extends Utilisateur{

	//ComTest
	@OneToMany(mappedBy = "assistant",fetch = FetchType.LAZY, cascade = {CascadeType.REMOVE, CascadeType.MERGE})
	@JsonIgnore
	private List<Relance> relances;
	
	
	
	
	public Assistant(String nom, String prenom, String username, String password, String mail, Role role,
			List<Relance> relances) {
		super(nom, prenom, username, password, mail, role);
		this.relances = relances;
	}
	public Assistant() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Relance> getRelances() {
		return relances;
	}
	public void setRelances(List<Relance> relances) {
		this.relances = relances;
	}
	
	
	

}
