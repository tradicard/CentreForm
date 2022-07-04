package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Role;

public interface IParticipantDao extends JpaRepository<Participant, Integer>{

	public Participant findByUsername(String username);
}
