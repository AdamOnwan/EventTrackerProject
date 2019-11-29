package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.event.entities.Volunteer;
import com.skilldistillery.eventtracker.services.VolunteerService;

@RestController
@RequestMapping("api")
public class VolunteerController {
	
	@Autowired
	private VolunteerService svc;
	
	@GetMapping("films")
	public List<Volunteer> allFilms() {
		return svc.listAllVolunteers();
	}

}
