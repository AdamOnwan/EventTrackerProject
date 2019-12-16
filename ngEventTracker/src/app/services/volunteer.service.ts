import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Volunteer } from 'src/app/models/volunteer';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  volunteers: Volunteer[] = [];

private baseUrl = 'http://localhost:8090/';
private url = this.baseUrl + 'api/volunteers';

  constructor(private http: HttpClient) { }

  create(volunteer: Volunteer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json'
      })
    };
    return this.http.post<Volunteer>(this.url, volunteer, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('VolunteerService.create(): Error creating volunteer');
      })
    );
    }

index() {
  const httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest'
    })
  };
  return this.http.get<Volunteer[]>(this.url, httpOptions)
  .pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('KABOOM');
    })
  );
}

update(volunteer: Volunteer) {
  console.log(volunteer);
  console.log('*****************************')
  const httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-type': 'application/json'
    })
  };
  return this.http.put(`${this.url}/${volunteer.volunteerId}`, volunteer, httpOptions)
  .pipe(catchError((err: any) => {
    console.error(err);
    return throwError('VolunteerService.update(): Error updating volunteer');
  })
);
}

delete(volunteerId: number) {
  return this.http.delete(`${this.url}/${volunteerId}`).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError('VolunteerService.delete(): Error deleting volunteer');
    })
  );
  }

}
