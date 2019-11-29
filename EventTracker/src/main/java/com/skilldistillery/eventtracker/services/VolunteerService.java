package com.skilldistillery.eventtracker.services;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Volunteer;

public interface VolunteerService {

	List<Volunteer> listAllVolunteers();

	Volunteer GetVolunteer(int id);

	Volunteer addVolunteer(Volunteer volunteer);

	boolean removeVolunteer(int id);

	Volunteer updateVolunteer(int id, Volunteer volunteer);

}
