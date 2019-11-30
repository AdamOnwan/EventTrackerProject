package com.skilldistillery.eventtracker.repositories;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.Volunteer;

@RunWith(SpringRunner.class)
@SpringBootTest
class VolunteerRepositoryTests {
	
	@Autowired
	private VolunteerRepository repo;

	@Test
	public void test_VolunteerRepository_findBySkills() {
		List<Volunteer> volunteers = repo.findBySkills("Fundraising");
		assertNotNull(volunteers);
		assertEquals(1, volunteers.size());
	}
	

}
