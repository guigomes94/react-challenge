package com.rentbook.api.resources;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rentbook.api.models.Phone;
import com.rentbook.api.services.PhoneService;

@RestController
@RequestMapping("/phones")
public class PhoneResource {
	
	@Autowired
	private PhoneService service;
	
	@GetMapping
	public ResponseEntity<?> listAll() {
		List<Phone> response = service.findAll();
		return !response.isEmpty() ? ResponseEntity.ok(response) : ResponseEntity.noContent().build();
	}
	
	/*
	 * @GetMapping("/{id}") public ResponseEntity<?> buscar(@PathVariable Long id) {
	 * Optional<Phone> response = repository.findById(id); return
	 * response.isPresent() ? ResponseEntity.ok(response) :
	 * ResponseEntity.notFound().build(); }
	 */
	
	@PostMapping
	public ResponseEntity<?> create(@Valid @RequestBody Phone obj) {
		Phone save = service.addPhone(obj);
		return save != null ? ResponseEntity.status(HttpStatus.CREATED).body(save) : ResponseEntity.badRequest().build();
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.deletePhone(id);
	}

}
