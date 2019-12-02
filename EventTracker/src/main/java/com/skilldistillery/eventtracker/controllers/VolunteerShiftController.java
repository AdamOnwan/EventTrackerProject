package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.skilldistillery.eventtracker.entities.VolunteerShift;
import com.skilldistillery.eventtracker.services.VolunteerShiftService;

@RestController
@RequestMapping("api")
public class VolunteerShiftController {
	
	@Autowired
	private VolunteerShiftService svc;
	
	@GetMapping("volunteerShifts")
	public List<VolunteerShift> allVolunteerShifts() {
		return svc.listAllVolunteerShifts();
	}
	
	@GetMapping("volunteerShifts/{volunteerShiftId}")
	public VolunteerShift show(@PathVariable("volunteerShiftId") Integer pid, HttpServletResponse resp) {
		VolunteerShift volunteerShift = svc.GetVolunteerShift(pid);
		if (volunteerShift == null) {
			resp.setStatus(404);
		}
		return volunteerShift;
	}
	
}
