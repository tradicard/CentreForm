package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;





public interface IAssistantService {
	public Assistant chercherParUsername(String username);
	public void modifierService(Assistant r);
	public void supprimerService(int id);
	public List<Assistant> getAllService();
	public Optional<Assistant> selectByIdService(int id);
	public void ajouterService(Assistant r);

}
