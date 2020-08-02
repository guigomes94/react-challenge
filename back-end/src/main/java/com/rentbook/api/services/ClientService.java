package com.rentbook.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentbook.api.models.Client;
import com.rentbook.api.repositories.ClientRepository;
import com.rentbook.api.services.exceptions.EntityNotFoundException;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;
	
	public List<Client> findAll() {
		return repository.findAll();
	}
	
	public Client findById(Long id) {
		return repository.findById(id).orElseThrow(
				() -> new EntityNotFoundException("Client not found! ID " + id + " not exist."));
	}

	public Client createClient(Client obj) {
		try {
			return repository.save(obj);

		} catch (IllegalArgumentException e) {
			return null;

		}
	}

	public Client updateClient(Long id, Client obj) {
		Optional<Client> oldObj = repository.findById(id);

		if (oldObj.isPresent()) {
			Client updated = oldObj.get();
			updated.setName(obj.getName());
			updated.setEmail(obj.getEmail());

			return repository.save(updated);
		}

		return null;
	}

}
