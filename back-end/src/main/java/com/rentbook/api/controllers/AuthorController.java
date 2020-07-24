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

import com.rentbook.api.models.Author;
import com.rentbook.api.repositories.AuthorRepository;
import com.rentbook.api.services.AuthorRegisterService;

@RestController
@RequestMapping("/authors")
public class AuthorController {
	
	@Autowired
	private AuthorRepository repository;
	
	@Autowired
	private AuthorRegisterService service;
	
	@GetMapping
	public ResponseEntity<?> listAll() {
		List<Author> response = repository.findAll();
		return !response.isEmpty() ? ResponseEntity.ok(response) : ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findOne(@PathVariable Long id) {
		Optional<Author> response = repository.findById(id);
		return response.isPresent() ? ResponseEntity.ok(response) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody Author obj) {
		Author save = service.createAuthor(obj);
		return save != null ? ResponseEntity.status(HttpStatus.CREATED).body(save) : ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody Author obj) {
		Author updated = service.updateAuthor(id, obj);
		return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
	}

}
