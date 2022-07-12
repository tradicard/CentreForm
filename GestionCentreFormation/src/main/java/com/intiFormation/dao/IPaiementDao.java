package com.intiFormation.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Role;

public interface IPaiementDao extends JpaRepository<Paiement, Integer> {

	public List<Paiement> findByParticipant_Id(int id);
}
