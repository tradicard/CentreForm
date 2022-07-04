package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class HistoriqueParticipant {
	int idHistoriqueFormateur;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormation")
	Formation formation;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormateur")
	Formateur formateur;
}
