package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.HistoriqueFormateur;
import com.intiFormation.entity.Role;

public interface IHistoriqueFormateurDao extends JpaRepository<HistoriqueFormateur, Integer> {

	public List<HistoriqueFormateur> findByFormateur_Id(int id);
	
}
