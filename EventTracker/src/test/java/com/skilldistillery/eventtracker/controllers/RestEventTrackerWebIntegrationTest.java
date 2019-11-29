package com.skilldistillery.eventtracker.controllers;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.skilldistillery.eventtracker.entities.Volunteer;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=WebEnvironment.DEFINED_PORT)
class RestEventTrackerWebIntegrationTest {
	private String baseUrl = "http://localhost:8090/";

	  @Test
	  public void testListAllVolunteers() throws IOException{
	    // configure TestRestTemplate to git our film index route
	    TestRestTemplate restTest = new TestRestTemplate();
	    ResponseEntity<String> response = restTest.getForEntity(baseUrl + "api/volunteers", String.class);

	    assertThat( response.getStatusCode(), equalTo(HttpStatus.OK));

	    ObjectMapper mapper = new ObjectMapper();

	    // map to a JsonNode
	    JsonNode responseJson = mapper.readTree(response.getBody());

	    // map to a Collection of Film objects
	    List<Volunteer> volunteers = mapper.readValue(response.getBody(),  mapper.getTypeFactory().constructCollectionType(List.class, Volunteer.class));

	    assertThat( responseJson.isMissingNode(), is(false));
	    assertThat( volunteers.get(0).getFname(), is("Adam"));
	  }
	}