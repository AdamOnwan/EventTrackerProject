package com.skilldistillery.event.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.eventtracker.entities.VolunteerShift;

class VolunteerShiftTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private VolunteerShift volunteerShift;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("EventTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		volunteerShift = em.find(VolunteerShift.class, 2);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		volunteerShift = null;
	}

	@Test
	void test_volunteerShift_entity_mappings() {
		assertNotNull(volunteerShift);
		assertEquals(null, volunteerShift.getVolunteerJob());
	}
	@Test
	void test_volunteerShift_to_Volunteer() {
		assertNotNull(volunteerShift);
		assertEquals("manual labor", volunteerShift.getVolunteers().get(0).getSkills());
	}

}
