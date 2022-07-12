package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Role;

public interface IProspectDao extends JpaRepository<Prospect, Integer> {

}
