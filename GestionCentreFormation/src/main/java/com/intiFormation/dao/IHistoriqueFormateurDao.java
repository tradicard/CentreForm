package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.HistoriqueFormateur;
import com.intiFormation.entity.Role;

public interface IHistoriqueFormateurDao extends JpaRepository<HistoriqueFormateur, Integer> {

}
