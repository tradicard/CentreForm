package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Quizz;
import com.intiFormation.entity.Utilisateur;

public interface IQuizzDao extends JpaRepository<Quizz, Integer>{
	public List<Quizz> findByFormation_IdFormation(int id);
}
