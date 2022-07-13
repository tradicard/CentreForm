package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

public interface IFormationDao extends JpaRepository<Formation, Integer>{
	public List<Formation> findByParticipants_Id(int id);
	public Formation findByFormateur_Id(int id);
}
