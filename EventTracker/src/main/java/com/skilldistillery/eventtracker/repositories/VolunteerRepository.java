package com.skilldistillery.eventtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Integer> {
	
	List<Volunteer> findBySkills(String skills);

}
