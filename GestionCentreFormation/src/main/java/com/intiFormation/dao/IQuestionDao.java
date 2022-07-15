package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Question;
import com.intiFormation.entity.Quizz;

public interface IQuestionDao extends JpaRepository<Question, Integer>{
	public List<Question> findByQuizz_IdQuizz(int id);
}
