package com.rentbook.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentbook.api.models.Phone;

public interface PhoneRepository extends JpaRepository<Phone, Long>{

}
