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

class VolunteerTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Volunteer volunteer;

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
		volunteer = em.find(Volunteer.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		volunteer = null;
	}

	@Test
	void test_volunteer_entity_mappings() {
		assertNotNull(volunteer);
		assertEquals("Adam", volunteer.getFname());
	}

}
