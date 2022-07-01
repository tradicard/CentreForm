package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Formateur;
import com.intiFormation.entity.Paiement;
import com.intiFormation.entity.Participant;
import com.intiFormation.entity.Prospect;
import com.intiFormation.entity.Relance;
import com.intiFormation.entity.Role;




public interface IRelanceService {
	
	public void modifierService(Relance r);
	public void supprimerService(int id);
	public List<Relance> getAllService();
	public Optional<Relance> selectByIdService(int id);
	public void ajouterService(Relance r);

}
