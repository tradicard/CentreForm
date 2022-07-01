package com.intiFormation.Service;

import java.util.List;
import java.util.Optional;

import com.intiFormation.entity.Assistant;
import com.intiFormation.entity.Contact;
import com.intiFormation.entity.Role;




public interface IContactService {
	
	public void modifierService(Contact r);
	public void supprimerService(int id);
	public List<Contact> getAllService();
	public Optional<Contact> selectByIdService(int id);
	public void ajouterService(Contact r);

}
