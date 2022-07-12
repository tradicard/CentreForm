package com.intiFormation.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Contact;

public interface IContactDao extends JpaRepository<Contact, Integer> {

	
	public List<Contact> findByProspect_nom(String nom);
}
