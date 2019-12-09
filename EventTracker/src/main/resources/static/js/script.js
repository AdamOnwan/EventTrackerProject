window.addEventListener('load', function(evt) {
	console.log("Document loaded");
	init();
});
function init() {
	document.volunteerForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var volunteerId = document.volunteerForm.volunteerId.value;
		if (!isNaN(volunteerId) && volunteerId > 0) {
			getVolunteer(volunteerId);
		}
	});
	document.allVolunteerForm.lookupAll.addEventListener('click', function(
			event) {
		event.preventDefault();
		getAllVolunteer();
	});
	document.addVolunteerForm.create.addEventListener('click', function(event) {
		event.preventDefault();
		addNewVolunteer();
	});

}

function addNewVolunteer() {
	var xhr = new XMLHttpRequest();

	xhr.open('POST', 'api/volunteers', true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var volunteerObject = JSON.parse(xhr.responseText);
			displayVolunteer(volunteerObject);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('volunteerData');
			dataDiv.textContent = 'Error Adding Volunteer';
		}
	};
	let form = document.addVolunteerForm;
	var newVolunteerObject = {
		fname : form.fname.value,
		lname : form.lname.value,
		phone : form.phone.value,
		email : form.email.value,
		status : form.status.value,
		skills : form.skills.value,
		availability : form.availability.value,
	};
	var newVolunteerJsonString = JSON.stringify(newVolunteerObject);
	xhr.send(newVolunteerJsonString);
}

function getVolunteer(volunteerId) {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/volunteers/' + volunteerId, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var volunteerObject = JSON.parse(xhr.responseText);
			displayVolunteer(volunteerObject)
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('volunteerData');
			dataDiv.textContent = 'Volunteer Not Found';
		}
	};
	xhr.send(null);
}

function displayVolunteer(volunteer) {
	var dataDiv = document.getElementById('volunteerData');
	dataDiv.textContent = '';

	while (dataDiv.firstElementChild) {
		dataDiv.removeElement(dataDiv.firstElementChild);
	}

	let fnameFn = document.createElement('h1');
	dataDiv.appendChild(fnameFn);
	fnameFn.textContent = 'Volunteer name: ' + volunteer.fname + ' '
			+ volunteer.lname;

	let phonePn = document.createElement('ul');
	dataDiv.appendChild(phonePn);

	let emailE1 = document.createElement('li');
	dataDiv.appendChild(emailE1);
	emailE1.textContent = 'Email: ' + volunteer.email;

	let statusS1 = document.createElement('li');
	dataDiv.appendChild(statusS1);
	statusS1.textContent = 'Status: ' + volunteer.status;

	let skillsSk = document.createElement('li');
	dataDiv.appendChild(skillsSk);
	skillsSk.textContent = 'Skills: ' + volunteer.skills;

	let availabilityAv = document.createElement('li');
	dataDiv.appendChild(availabilityAv);
	availabilityAv.textContent = 'Availability: ' + volunteer.availability;

	let editForm = document.createElement('form');
	dataDiv.appendChild(editForm);
	var editBtn = document.createElement('button');
	dataDiv.appendChild(editBtn);
	editBtn.name = "edit";
	editBtn.textContent = "edit";
	editBtn.addEventListener('click', function(event) {
		event.preventDefault();
		updateVolunteerForm(volunteer);
	});

	let deleteForm = document.createElement('form');
	dataDiv.appendChild(deleteForm);
	var deleteBtn = document.createElement('button');
	dataDiv.appendChild(deleteBtn);
	deleteBtn.name = "deleteBtn";
	deleteBtn.textContent = "delete";
	deleteBtn.addEventListener('click', function(event) {
		event.preventDefault();
		removeVolunteer(volunteer.id);
	});

}

function getAllVolunteer() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/volunteers', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var volunteerObject = JSON.parse(xhr.responseText);
			console.log(volunteerObject);
			displayAllVolunteers(volunteerObject);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('volunteerData');
			dataDiv.textContent = 'Volunteer Not Found';
		}
	};
	xhr.send(null);
}
function displayAllVolunteers(volunteer) {

	let dataDiv = document.getElementById('div');
	dataDiv.textContent = '';

	let title = document.createElement('h1');
	title.textContent = 'Volunteer List';
	dataDiv.appendChild(title);

	let table = document.createElement('table')
	table.textContent = 'List of Volunteers';
	dataDiv.appendChild(table);

	for (i = 0; i < volunteer.length; i++) {
		let tableRow = document.createElement('tr');
		table.appendChild(tableRow);
		let tableData1 = document.createElement('td');
		let tableData2 = document.createElement('td');
		let tableData3 = document.createElement('td');
		let tableData4 = document.createElement('td');
		let tableData5 = document.createElement('td');
		tableData1.textContent = 'Volunteer Name: ' + volunteer[i].fname
				+ volunteer[i].lname;
		tableData2.textContent = 'Email: ' + volunteer[i].email;
		tableData3.textContent = 'Status: ' + volunteer[i].status;
		tableData4.textContent = 'Skills: ' + volunteer[i].skills;
		tableData5.textContent = 'Availability: ' + volunteer[i].availability;
		tableRow.appendChild(tableData1);
		tableRow.appendChild(tableData2);
		tableRow.appendChild(tableData3);
		tableRow.appendChild(tableData4);
		tableRow.appendChild(tableData5);
	}
	
	let uniqueInfo = document.createElement('p');
	uniqueInfo = document.createElement('h1');
	let count = 0
	for (i = 0; i < volunteer.length; i++) {
		count++;
	}
	uniqueInfo.textContent = 'Number of volunteers :' + count;
	dataDiv.appendChild(uniqueInfo);
	
	let uniqueInfo1 = document.createElement('p');
	uniqueInfo1 = document.createElement('h1');
	count = 0;
	let count1 = 0;
	for (i = 0; i < volunteer.length; i++) {
		if (volunteer[i].skills === 'Computer Usage') {
			count++;
			if (volunteer[i].availability === 'Weekends') {
				count1++;
			}
		}
			
	}
	uniqueInfo1.textContent = 'Volunteers with Computer Usage skills :' + count + ' and ' +  count1 + ' comes in on weekends';
	dataDiv.appendChild(uniqueInfo1);
}

function removeVolunteer(volunteerId) {

	var xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/volunteer/' + volunteerId, true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			let dataDelDiv = document.getElementById('volunteerData');
			dataDelDiv.textContent = '';
			let delMsg = document.createElement('h3');
			delMsg.textContent = 'Very Successful Delete';
			dataDelDiv.appendChild(delMsg);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('volunteerData');
			dataDiv.textContent = 'Volunteer Not Found';
		}
	};
	xhr.send();
}

function updateVolunteerForm(volunteer) {

	let dataDiv = document.getElementById('div');
	dataDiv.textContent = '';

	let title = document.createElement('h1');
	title.textContent = 'Volunteer Update' + volunteer.id;
	dataDiv.appendChild(title);

	let table = document.createElement('table')
	table.textContent = 'Update Fields';
	dataDiv.appendChild(table);

	let updateForm = document.createElement('form');
	updateForm.name = 'updateForm';
	dataDiv.appendChild(updateForm);
	let inputFirstName = document.createElement('input');
	inputFirstName.type = 'text';
	inputFirstName.name = 'fname';
	inputFirstName.placeholder = volunteer.fname;
	updateForm.appendChild(inputFirstName);
	let inputLastName = document.createElement('input');
	inputLastName.type = 'text';
	inputLastName.name = 'lname';
	inputLastName.value = volunteer.lname;
	updateForm.appendChild(inputLastName);
	let inputPhone = document.createElement('input');
	inputPhone.type = 'text';
	inputPhone.name = 'phone';
	inputPhone.value = volunteer.phone;
	updateForm.appendChild(inputLastName);
	let inputEmail = document.createElement('input');
	inputEmail.type = 'text';
	inputEmail.name = 'email';
	inputEmail.value = volunteer.email;
	updateForm.appendChild(inputEmail);
	let inputStatus = document.createElement('input');
	inputStatus.type = 'text';
	inputStatus.name = 'status';
	inputStatus.value = volunteer.status;
	updateForm.appendChild(inputStatus);
	let inputSkills = document.createElement('input');
	inputSkills.type = 'text';
	inputSkills.name = 'skills';
	inputSkills.value = volunteer.skills;
	updateForm.appendChild(inputSkills);
	let inputAvailability = document.createElement('input');
	inputAvailability.type = 'text';
	inputAvailability.name = 'availability';
	inputAvailability.value = volunteer.availability;
	updateForm.appendChild(inputAvailability);
	let submitBtn = document.createElement('button');
	submitBtn.id = 'updateBtn';
	submitBtn.innerHTML = 'Update Volunteer'
	updateForm.appendChild(submitBtn);

	updateForm.updateBtn.addEventListener('click', function(event) {
		event.preventDefault();
		updateVolunteer(volunteer);
	});


}
function updateVolunteer(volunteer) {

	var xhr = new XMLHttpRequest();
	console.log(document.updateForm.fname.value);

	xhr.open('PUT', 'api/volunteers/' + volunteer.id, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var volunteerObject = JSON.parse(xhr.responseText);
			displayVolunteer(volunteerObject)
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('volunteerData');
			dataDiv.textContent = 'Volunteer Not Found';
		}

	};
	// let form = document.addVolunteerForm;
	var updateVolunteerObject = {
		fname : document.updateForm.fname.value,
		lname : document.updateForm.lname.value,
		phone : document.updateForm.phone.value,
		email : document.updateForm.email.value,
		status : document.updateForm.status.value,
		skills : document.updateForm.skills.value,
		availability : document.updateForm.availability.value
	};

	var updateVolunteerJsonString = JSON.stringify(updateVolunteerObject);
	xhr.send(updateVolunteerJsonString);

	 tableData1.textContent = 'Volunteer First Name: ' + volunteer[i].fname
	 tableData1.textContent = 'Volunteer Last Name: ' + volunteer[i].lname;
	 tableData1.textContent = 'Volunteer Phone: ' + volunteer[i].phone;
	 tableData2.textContent = 'Email: ' + volunteer[i].email;
	 tableData3.textContent = 'Status: ' + volunteer[i].status;
	 tableData4.textContent = 'Skills: ' + volunteer[i].skills;
	 tableData5.textContent = 'Availability: ' + volunteer[i].availability;
	 updateForm.appendChild(tableData1);
	 updateForm.appendChild(tableData2);
	 updateForm.appendChild(tableData3);
	 updateForm.appendChild(tableData4);
	 updateForm.appendChild(tableData5);
	 updateForm.appendChild(tableData6);
	 updateForm.appendChild(tableData7);
}

function editButtonFunction(e) {
	let newContent = prompt('new value: ');
	console.log(e.target.previousSibling);
	e.target.previousSibling.textContent = newContent;
}




