package com.rentbook.api.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rentbook.api.models.Scheduling;
import com.rentbook.api.repositories.SchedulingRepository;
import com.rentbook.api.services.SchedulingService;

@RestController
@RequestMapping("/schedulings")
public class SchedulingController {
	
	@Autowired
	private SchedulingRepository repository;
	
	@Autowired
	private SchedulingService service;
	
	@GetMapping
	public ResponseEntity<?> listAll() {
		List<Scheduling> response = repository.findAll();
		return !response.isEmpty() ? ResponseEntity.ok(response) : ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findOne(@PathVariable Long id) {
		Optional<Scheduling> response = repository.findById(id);
		return response.isPresent() ? ResponseEntity.ok(response) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody Scheduling obj) {
		Scheduling save = service.createScheduling(obj);
		return save != null ? ResponseEntity.status(HttpStatus.CREATED).body(save) : ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody Scheduling obj) {
		Scheduling updated = service.updateScheduling(id, obj);
		return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.cancelScheduling(id);
	}

}
