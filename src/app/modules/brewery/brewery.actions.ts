import { createAction, props } from '@ngrx/store';
import { IBreweryModel } from '@models/brewery.model';

export const getBreweries = createAction('GET breweries');

export const loadBreweries = createAction(
	'LOAD breweries',
	props<{ breweries: IBreweryModel[] }>(),
);

export const errorBreweries = createAction(
	'ERROR breweries',
	props<{ message: string }>(),
);
