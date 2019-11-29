package com.skilldistillery.eventtracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Volunteer;
import com.skilldistillery.eventtracker.repositories.VolunteerRepository;

@Service
public class VolunteerServiceImpl implements VolunteerService {
	
	@Autowired
	VolunteerRepository repo;
	
	@Override
	public List<Volunteer> listAllVolunteers() {
		return repo.findAll();
	}

}
