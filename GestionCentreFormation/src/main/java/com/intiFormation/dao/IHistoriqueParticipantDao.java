package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.HistoriqueParticipant;
import com.intiFormation.entity.Role;

public interface IHistoriqueParticipantDao extends JpaRepository<HistoriqueParticipant, Integer> {

	public List<HistoriqueParticipant> findByParticipant_Id(int id); 
}
