package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Commercial;
import com.intiFormation.entity.Role;




public interface ICommercialService {
	public Commercial chercherParUsername(String username);
	public void modifierService(Commercial r);
	public void supprimerService(int id);
	public List<Commercial> getAllService();
	public Optional<Commercial> selectByIdService(int id);
	public void ajouterService(Commercial r);

}
