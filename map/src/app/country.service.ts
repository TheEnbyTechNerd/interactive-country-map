import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private apiUrl = 'http://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) { }

  // Method to fetch country data by country code
  getCountryData(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/${countryCode}?format=json`;
    return this.http.get<any>(url); // Making an HTTP GET request to fetch the country data
  }
}
