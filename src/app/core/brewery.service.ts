import { IBreweryModel } from '@models/brewery.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BreweryService {
  constructor(private httpClient: HttpClient) {}

  GET_BREWERIES = 'https://api.openbrewerydb.org/breweries?per_page=50';

  getBreweries(name?: string) {
    const url = name
      ? `${this.GET_BREWERIES}&&by_name=${name}`
      : this.GET_BREWERIES;
    return this.httpClient.get(url, httpOptions);
  }
}
