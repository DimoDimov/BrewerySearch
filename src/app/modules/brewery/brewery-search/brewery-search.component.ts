import { selectBreweries, selectBreweriesError } from './../brewery.reducers';
import { IBreweryModel } from '@models/brewery.model';
import { IBreweryState } from '@modules/brewery/brewery.reducers';
import { AppState } from './../../../reducers/index';
import { getBreweries } from './../brewery.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectBrewery } from 'app/reducers';
@Component({
	selector: 'app-brewery-search',
	templateUrl: './brewery-search.component.html',
	styleUrls: ['./brewery-search.component.css'],
})
export class BrewerySearchComponent implements OnInit {
	toDoForm = new FormGroup({
		filterByName: new FormControl(''),
		filterByState: new FormControl(''),
	});

	breweryState$: Observable<IBreweryState>;
	breweries$: Observable<IBreweryModel[]>;
	error$: Observable<string>;

	constructor(private store: Store<AppState>) {
		this.store.dispatch(getBreweries());

		this.breweryState$ = this.store.pipe(select(selectBrewery));

		this.breweries$ = this.breweryState$.pipe(select(selectBreweries));
		this.error$ = this.breweryState$.pipe(select(selectBreweriesError));
	}

	ngOnInit(): void {}
}
