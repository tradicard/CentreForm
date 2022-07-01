package com.intiFormation.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.Entity;

@Entity
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
public class Utilisateur {
	
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;
		private String nom;
		private String prenom;
		private String username;
		private String password;
		private String mail;
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="idRole")
		private Role role;
		
		
		
		
		public Utilisateur(String nom, String prenom, String username, String password, String mail, Role role) {
			super();
			this.nom = nom;
			this.prenom = prenom;
			this.username = username;
			this.password = password;
			this.mail = mail;
			this.role = role;
		}
		public Utilisateur() {
			super();
			// TODO Auto-generated constructor stub
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
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
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMail() {
			return mail;
		}
		public void setMail(String mail) {
			this.mail = mail;
		}
		public Role getRole() {
			return role;
		}
		public void setRole(Role role) {
			this.role = role;
		}
		
		
		
		
		


}
