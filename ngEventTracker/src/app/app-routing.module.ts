import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteerComponent } from './components/volunteer/volunteer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'volunteers', component: VolunteerComponent},
  {path: 'volunteer', component: VolunteerComponent},
  {path: 'volunteer/:volunteerId', component: VolunteerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
