package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.HistoriqueFormateur;
import com.intiFormation.entity.Role;




public interface IHistoriqueFormateurService {
	
	public void modifierService(HistoriqueFormateur r);
	public void supprimerService(int id);
	public List<HistoriqueFormateur> getAllService();
	public Optional<HistoriqueFormateur> selectByIdService(int id);
	public void ajouterService(HistoriqueFormateur r);

}
