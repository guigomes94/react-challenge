package com.rentbook.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentbook.api.models.Phone;
import com.rentbook.api.repositories.PhoneRepository;
import com.rentbook.api.services.exceptions.EntityNotFoundException;

@Service
public class PhoneService {
	
	@Autowired
	private PhoneRepository repository;
	
	public List<Phone> findAll() {
		return repository.findAll();
	}
	
	public Phone findById(Long id) {
		return repository.findById(id).orElseThrow(
				() -> new EntityNotFoundException("Phone not found! ID " + id + " not exist."));
	}
	
	public Phone addPhone(Phone obj) {
		try {
			return repository.save(obj);
			
		} catch (IllegalArgumentException e) {
			return null;
			
		}
	}
	
	public void deletePhone(Long id) {
		repository.deleteById(id);
	}
	
}
