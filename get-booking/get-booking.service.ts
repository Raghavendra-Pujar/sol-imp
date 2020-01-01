import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BuffetBooking } from '../buffet-booking/buffet-booking';


@Injectable({
  providedIn: 'root'
})
export class GetBookingService {

  constructor(private http: HttpClient) { }

  getBooking(id): Observable<BuffetBooking>{
    return this.http.get<BuffetBooking>("http://localhost:3000/fetchBooking/"+id);
  }
}

