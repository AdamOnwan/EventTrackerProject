package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Integer> {

}
