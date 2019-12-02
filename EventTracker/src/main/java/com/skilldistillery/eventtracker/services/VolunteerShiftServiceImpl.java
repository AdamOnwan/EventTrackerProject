package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Volunteer;
import com.skilldistillery.eventtracker.entities.VolunteerShift;
import com.skilldistillery.eventtracker.repositories.VolunteerShiftRepository;

@Service
public class VolunteerShiftServiceImpl implements VolunteerShiftService {
	
	@Autowired
	VolunteerShiftRepository repo;
	
	@Override
	public List<VolunteerShift> listAllVolunteerShifts() {
		return repo.findAll();
	}
	
	@Override
	public VolunteerShift GetVolunteerShift(int id) {
		VolunteerShift volunteerShift = null;
		Optional<VolunteerShift> opt = repo.findById(id);
		if (opt.isPresent()) {
			volunteerShift = opt.get();
		}
		return volunteerShift;
	}
	
}
