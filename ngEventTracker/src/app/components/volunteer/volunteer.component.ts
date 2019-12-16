import { VolunteerService } from './../../services/volunteer.service';
import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/models/volunteer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  volunteers: Volunteer[] = [];
  newVolunteer: Volunteer = new Volunteer();
  selectedVolunteer: Volunteer = null;
  updatedVolunteer: Volunteer = null;

  constructor(private vSvc: VolunteerService, private router: Router) { }

  ngOnInit() {
    this.getAllVolunteers();
  }
  getAllVolunteers() {
    this.vSvc.index().subscribe(
    data => {
      this.volunteers = data;
    },
    err => {
      console.error(err);
      this.router.navigateByUrl('not found');
    });
  }


  createNewVolunteer() {
    console.log('in create new volunteer method');
    console.log(this.newVolunteer);
    this.vSvc.create(this.newVolunteer).subscribe(
      data => {
        this.getAllVolunteers();
      },
      err => {
        console.error('VolunteerComponent.createNewVolunteer()): error adding volunteer');
        console.error(err);
      }
    );
  }

  updateVolunteer() {
    this.vSvc.update(this.selectedVolunteer.id, this.selectedVolunteer).subscribe(
    data => {
      this.getAllVolunteers();
    },
    err => {
      console.error('VolunteerComponent.updateVolunteer()): error updating volunteer');
      console.error(err);
        });
    this.getAllVolunteers();
    }

  deleteVolunteer(volunteerId: number) {
      // this.todoSvc.delete(id);
      // this.todos = this.todoSvc.index();
      console.log(volunteerId);
      console.log('*************************')
      this.vSvc.delete(volunteerId).subscribe(
        good => {
      this.getAllVolunteers();
        },
        bad => {
      console.error('VolunteerComponent.deleteVolunteer()): error deleting volunteer');
      console.error(bad);
    });
  }

  numberOfSkills() {
  }
    getNumVolunteerSkills = function() {
      return this.volunteers.length;
    };
}
