package com.rentbook.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentbook.api.models.Scheduling;

public interface SchedulingRepository extends JpaRepository<Scheduling, Long>{

}
