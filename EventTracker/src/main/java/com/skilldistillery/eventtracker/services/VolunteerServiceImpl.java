package com.skilldistillery.eventtracker.services;

import java.util.List;
import java.util.Optional;

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
	
	@Override
	public Volunteer GetVolunteer(int id) {
		Volunteer volunteer = null;
		Optional<Volunteer> opt = repo.findById(id);
		if (opt.isPresent()) {
			volunteer = opt.get();
		}
		return volunteer;
	}
	
	@Override
	public Volunteer addVolunteer(Volunteer volunteer) {
		repo.saveAndFlush(volunteer);
		return volunteer;
	}

	@Override
	public Volunteer updateVolunteer(int id, Volunteer volunteer) {
		Optional<Volunteer> opt = repo.findById(id);
		Volunteer updateVolunteer = opt.get();
//		if (opt.isPresent()) {
//			volunteer = opt.get();
//		}
		updateVolunteer.setFname(volunteer.getFname());
		updateVolunteer.setLname(volunteer.getLname());
		updateVolunteer.setPhone(volunteer.getPhone());
		updateVolunteer.setEmail(volunteer.getEmail());
		updateVolunteer.setStatus(volunteer.getStatus());
		updateVolunteer.setSkills(volunteer.getSkills());
		updateVolunteer.setAvailability(volunteer.getAvailability());
		repo.saveAndFlush(updateVolunteer);
		return updateVolunteer;
	}
	
	@Override
	public boolean removeVolunteer(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return true;
		} else
			return false;
	}

}
