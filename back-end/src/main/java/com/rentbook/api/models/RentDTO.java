package com.rentbook.api.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

public class RentDTO {
	
	private Long id;
	
	private String client;
	
	private String book;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate rentDate;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private LocalDate devolutionDate;
	
	private Double rentValue;
	
	private Double lateFee;
	
	private Double totalPayment;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getClient() {
		return client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	public String getBook() {
		return book;
	}

	public void setBook(String book) {
		this.book = book;
	}

	public LocalDate getRentDate() {
		return rentDate;
	}

	public void setRentDate(LocalDate rentDate) {
		this.rentDate = rentDate;
	}

	public LocalDate getDevolutionDate() {
		return devolutionDate;
	}

	public void setDevolutionDate(LocalDate devolutionDate) {
		this.devolutionDate = devolutionDate;
	}

	public Double getRentValue() {
		return rentValue;
	}

	public void setRentValue(Double rentValue) {
		this.rentValue = rentValue;
	}

	public Double getLateFee() {
		return lateFee;
	}

	public void setLateFee(Double lateFee) {
		this.lateFee = lateFee;
	}

	public Double getTotalPayment() {
		return rentValue + lateFee;
	}

	public void setTotalPayment(Double totalPayment) {
		this.totalPayment = totalPayment;
	}
	
}