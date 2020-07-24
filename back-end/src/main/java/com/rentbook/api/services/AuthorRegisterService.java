package com.rentbook.api.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentbook.api.models.Author;
import com.rentbook.api.repositories.AuthorRepository;

@Service
public class AuthorRegisterService {
	
	@Autowired
	private AuthorRepository repository;
	
	public Author createAuthor(Author obj) {
		try {
			return repository.save(obj);
			
		} catch (IllegalArgumentException e) {
			return null;
			
		}
	}
	
	public Author updateAuthor(Long id, Author obj) {
		Optional<Author> oldObj = repository.findById(id);
		
		if (oldObj.isPresent()) {
			Author updated = oldObj.get();
			updated.setName(obj.getName());
			
			return repository.save(updated);
		}
		
		return null;
	}
}
