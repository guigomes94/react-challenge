package com.rentbook.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentbook.api.models.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
	
}
