import { selectBreweries } from './../brewery.reducers';
import { IBreweryModel } from '@models/brewery.model';
import { IBreweryState } from '@modules/brewery/brewery.reducers';
import { getBreweries } from './../brewery.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
	map,
	debounceTime,
	distinctUntilChanged,
	filter,
} from 'rxjs/operators';
@Component({
	selector: 'app-brewery-search',
	templateUrl: './brewery-search.component.html',
	styleUrls: ['./brewery-search.component.css'],
})
export class BrewerySearchComponent implements OnInit {
	searchBreweryForm = new FormGroup({
		filterByName: new FormControl(''),
		filterByState: new FormControl(''),
	});

	breweryState$: Observable<IBreweryState>;
	breweries$: Observable<IBreweryModel[]>;
	error$: Observable<string>;

	constructor(private store: Store<IBreweryState>) {
		this.store.dispatch(getBreweries({ name: '' }));

		this.breweries$ = this.store.pipe(select(selectBreweries));
		this.onChanges();
	}

	onChanges(): void {
		this.searchBreweryForm
			.get('filterByName')
			.valueChanges.pipe(
				debounceTime(400),
				distinctUntilChanged(),
				map(query => {
					const name = query && query.length > 2 ? query : '';
					this.store.dispatch(getBreweries({ name }));
				}),
			)
			.subscribe();
	}

	ngOnInit(): void {}
}
