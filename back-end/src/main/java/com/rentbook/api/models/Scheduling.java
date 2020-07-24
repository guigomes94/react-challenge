package com.rentbook.api.models;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Scheduling implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idscheduling")
	private Long idScheduling;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "idclient")
	private Client client;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "idbook")
	private Book book;
	
	@NotNull
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "rentdate")
	private LocalDate rentDate;
	
	public Scheduling() {
		
	}

	public Scheduling(Long idScheduling, Client client, Book book, LocalDate rentDate) {
		this.idScheduling = idScheduling;
		this.client = client;
		this.book = book;
		this.rentDate = rentDate;
	}

	public Long getIdScheduling() {
		return idScheduling;
	}

	public void setIdScheduling(Long idScheduling) {
		this.idScheduling = idScheduling;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public LocalDate getRentDate() {
		return rentDate;
	}

	public void setRentDate(LocalDate rentDate) {
		this.rentDate = rentDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((idScheduling == null) ? 0 : idScheduling.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Scheduling other = (Scheduling) obj;
		if (idScheduling == null) {
			if (other.idScheduling != null)
				return false;
		} else if (!idScheduling.equals(other.idScheduling))
			return false;
		return true;
	}

}
