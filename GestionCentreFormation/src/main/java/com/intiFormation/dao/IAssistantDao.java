package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

public interface IAssistantDao extends JpaRepository<Assistant, Integer> {

	public Assistant findByUsername(String username);
}
