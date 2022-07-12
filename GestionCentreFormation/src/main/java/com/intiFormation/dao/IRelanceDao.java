package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Role;

public interface IRelanceDao extends JpaRepository<Relance, Integer>{

}
