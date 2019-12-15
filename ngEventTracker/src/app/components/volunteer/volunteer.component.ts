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

  newVolunteer: Volunteer = new Volunteer();
  volunteers: Volunteer[] = [];
  selectedVolunteer: Volunteer = null;

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
    }
  );
}


  // createNewVolunteer() {
  //   this.pokeSvc.create(this.newPoke).subscribe(
  //     goodStuff => {
  //       this.loadPokemon();
  //     },
  //     badStuff => {
  //       console.error(badStuff);
  //     }
  //   );

  // }

}
