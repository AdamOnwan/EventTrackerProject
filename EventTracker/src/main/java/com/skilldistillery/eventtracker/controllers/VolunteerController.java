package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Volunteer;
import com.skilldistillery.eventtracker.services.VolunteerService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4209" })
public class VolunteerController {
	
	@Autowired
	private VolunteerService svc;
	
	@GetMapping("volunteers")
	public List<Volunteer> allVolunteers() {
		return svc.listAllVolunteers();
	}
	
	@GetMapping("volunteers/{volunteerId}")
	public Volunteer show(@PathVariable("volunteerId") Integer pid, HttpServletResponse resp) {
		Volunteer volunteer = svc.GetVolunteer(pid);
		if (volunteer == null) {
			resp.setStatus(404);
		}
		return volunteer;
	}
	
	@PostMapping("volunteers")
	public Volunteer create(@RequestBody Volunteer volunteer, HttpServletRequest req, HttpServletResponse resp) {
		try {
			volunteer = svc.addVolunteer(volunteer);
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(volunteer.getId());
			resp.addHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			volunteer = null;
		}
		return volunteer;
}
	
	@PutMapping("volunteers/{volunteerId}")
	@ResponseBody
	public Volunteer updateVolunteer(@PathVariable Integer volunteerId, @RequestBody Volunteer volunteer, HttpServletResponse resp) {
		try {
			volunteer = svc.updateVolunteer(volunteerId, volunteer);
			if (volunteer == null)
				resp.setStatus(404);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			volunteer = null;
		}
		return volunteer;
	}
	
	@DeleteMapping("volunteer/{volunteerId}")
	@ResponseBody
	public void removeFilm(@PathVariable("volunteerId") Integer pid, HttpServletRequest req, HttpServletResponse resp) {
		try {
		boolean deleted = svc.removeVolunteer(pid);
		if (deleted) {
			resp.setStatus(204);
		}
		else {
			resp.setStatus(404);
		}
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
		}
	}
	

}
