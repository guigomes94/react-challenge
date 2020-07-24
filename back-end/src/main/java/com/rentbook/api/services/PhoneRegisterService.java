package com.rentbook.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentbook.api.models.Phone;
import com.rentbook.api.repositories.PhoneRepository;

@Service
public class PhoneRegisterService {
	
	@Autowired
	private PhoneRepository repository;
	
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
