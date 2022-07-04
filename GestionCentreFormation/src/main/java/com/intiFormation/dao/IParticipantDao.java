package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Utilisateur;


public interface IParticipantDao extends JpaRepository<Participant, Integer>{

	public Participant findByUsername(String username);
}
