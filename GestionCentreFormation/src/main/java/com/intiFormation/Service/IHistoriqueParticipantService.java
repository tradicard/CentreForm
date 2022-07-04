package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.HistoriqueFormateur;
import com.intiFormation.entity.HistoriqueParticipant;
import com.intiFormation.entity.Role;




public interface IHistoriqueParticipantService {
	
	public void modifierService(HistoriqueParticipant r);
	public void supprimerService(int id);
	public List<HistoriqueParticipant> getAllService();
	public Optional<HistoriqueParticipant> selectByIdService(int id);
	public void ajouterService(HistoriqueParticipant r);

}
