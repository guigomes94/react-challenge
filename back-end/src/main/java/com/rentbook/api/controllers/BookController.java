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

import com.rentbook.api.models.Book;
import com.rentbook.api.repositories.BookRepository;
import com.rentbook.api.services.BookRegisterService;

@RestController
@RequestMapping("/books")
public class BookController {
	
	@Autowired
	private BookRepository repository;
	
	@Autowired
	private BookRegisterService service;
	
	@GetMapping
	public ResponseEntity<?> listAll() {
		List<Book> response = repository.findAll();
		return !response.isEmpty() ? ResponseEntity.ok(response) : ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findOne(@PathVariable Long id) {
		Optional<Book> response = repository.findById(id);
		return response.isPresent() ? ResponseEntity.ok(response) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody Book obj) {
		Book save = service.createBook(obj);
		return save != null ? ResponseEntity.status(HttpStatus.CREATED).body(save) : ResponseEntity.badRequest().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updated(@PathVariable Long id, @Valid @RequestBody Book obj) {
		Book updated = service.updateBook(id, obj);
		return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
	}

}
