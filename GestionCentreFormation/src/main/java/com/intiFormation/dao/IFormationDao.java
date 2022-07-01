package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;

public interface IFormationDao extends JpaRepository<Formation, Integer>{

}
