package com.rentbook.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentbook.api.models.Scheduling;
import com.rentbook.api.repositories.SchedulingRepository;

@Service
public class SchedulingService {
	
	@Autowired
	private SchedulingRepository repository;
	
	public Scheduling createScheduling(Scheduling obj) {
		try {
			return repository.save(obj);
			
		} catch (IllegalArgumentException e) {
			return null;
			
		}
	}
	
	public Scheduling updateScheduling(Long id, Scheduling obj) {
		Optional<Scheduling> oldObj = repository.findById(id);
		
		if (oldObj.isPresent()) {
			Scheduling updated = oldObj.get();
			updated.setBook(obj.getBook());
			updated.setClient(obj.getClient());
			updated.setRentDate(obj.getRentDate());
			
			return repository.save(updated);
		}
		
		return null;
	}
	
	public void cancelScheduling(Long id) {
		repository.deleteById(id);
	}
}
