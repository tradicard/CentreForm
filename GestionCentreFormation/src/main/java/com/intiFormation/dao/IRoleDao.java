package com.intiFormation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intiFormation.entity.Role;
import com.intiFormation.entity.Utilisateur;





public interface IRoleDao extends JpaRepository<Role, Integer> {
	public Role findByLibrole(String librole);

}
