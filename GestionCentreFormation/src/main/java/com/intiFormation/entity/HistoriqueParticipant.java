package com.intiFormation.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class HistoriqueParticipant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int idHistoriqueFormateur;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idFormation")
	Formation formation;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="idParticipant")
	Participant participant;
}
