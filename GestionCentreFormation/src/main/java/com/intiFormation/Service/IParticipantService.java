package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Role;




public interface IParticipantService {
	
	public void modifierService(Participant r);
	public void supprimerService(int id);
	public List<Participant> getAllService();
	public Optional<Participant> selectByIdService(int id);
	public void ajouterService(Participant r);

}
