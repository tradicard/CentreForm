package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Quizz;

public interface IQuizzDao extends JpaRepository<Quizz, Integer>{

}
