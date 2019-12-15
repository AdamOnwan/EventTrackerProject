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

}
