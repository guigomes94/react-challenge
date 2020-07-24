	package com.rentbook.api.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentbook.api.models.Rent;
import com.rentbook.api.models.RentDTO;
import com.rentbook.api.repositories.RentRepository;
import com.rentbook.api.services.RentService;

@RestController
@RequestMapping("/rents")
public class RentController {

	@Autowired
	private RentRepository repository;

	@Autowired
	private RentService service;

	@GetMapping
	public ResponseEntity<?> listAll() {
		List<Rent> list = repository.findAll();
		List<RentDTO> response = service.calcPaymentValues(list);
		return !response.isEmpty() ? ResponseEntity.ok(response) : ResponseEntity.noContent().build();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findOne(@PathVariable Long id) {
		Optional<Rent> response = repository.findById(id);
		return response.isPresent() ? ResponseEntity.ok(response) : ResponseEntity.notFound().build();
	}

	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody Rent obj) {
		Rent save = service.createRent(obj);
		return save != null ? ResponseEntity.status(HttpStatus.CREATED).body(save)
				: ResponseEntity.badRequest().build();
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody Rent obj) {
		RentDTO updated = service.devolutionBook(id, obj);
		return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
	}

}
