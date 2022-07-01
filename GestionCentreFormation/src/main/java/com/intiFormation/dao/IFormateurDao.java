package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Role;

public interface IFormateurDao extends JpaRepository<Formateur, Integer> {

}
