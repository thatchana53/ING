import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private baseUrl = '/api/v1/employees'

  constructor(private httpClient: HttpClient) { }

  getProductGroups() : Observable<any> {
    //return this.httpClient.get(`${this.baseUrl}/`);
    return of(["Product 1", "Product 2", "Product 3"]);    
  }


}
