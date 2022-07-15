package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Formation;
import com.intiFormation.entity.Role;




public interface IFormationService {
	
	public void modifierService(Formation r);
	public void supprimerService(int id);
	public List<Formation> getAllService();
	public Optional<Formation> selectByIdService(int id);
	public void ajouterService(Formation r);
	public List<Formation> findByParticipants_Id(int id);
	public Formation findByFormateur_Id(int id);

}
