package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.VolunteerShift;

public interface VolunteerShiftRepository extends JpaRepository<VolunteerShift, Integer> {
	
}
