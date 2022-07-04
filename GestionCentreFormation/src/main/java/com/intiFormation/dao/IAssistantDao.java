package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;

public interface IAssistantDao extends JpaRepository<Assistant, Integer> {
<<<<<<< HEAD
=======

>>>>>>> 505edf3f621584326a14ff1ae782d42bc8a9be91
	public Assistant findByUsername(String username);
}
