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

	GET_BREWERIES = 'https://api.openbrewerydb.org/breweries';

	breweries: IBreweryModel[];

	getBreweries() {
		return this.httpClient.get(this.GET_BREWERIES, httpOptions);
	}

	loadBreweries() {
		console.log('loadBreweries');
		return [];
	}
}
