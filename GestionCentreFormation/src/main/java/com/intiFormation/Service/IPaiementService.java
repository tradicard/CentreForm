package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Role;




public interface IPaiementService {
	
	public void modifierService(Paiement r);
	public void supprimerService(int id);
	public List<Paiement> getAllService();
	public Optional<Paiement> selectByIdService(int id);
	public void ajouterService(Paiement r);
	public List<Paiement> findByParticipant_Id(int id);
}
