package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Role;




public interface IProspectService {
	
	public void modifierService(Prospect r);
	public void supprimerService(int id);
	public List<Prospect> getAllService();
	public Optional<Prospect> selectByIdService(int id);
	public void ajouterService(Prospect r);

}
