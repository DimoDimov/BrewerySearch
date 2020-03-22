import { loadBreweries, errorBreweries } from './brewery.actions';
import { on, createReducer } from '@ngrx/store';
import { IBreweryModel } from '@models/brewery.model';

export interface IBreweryState {
	brewery: { items: IBreweryModel[]; error: string };
}

export const initialState: IBreweryState = {
	brewery: { items: [], error: '' },
};

export const BreweryReducer = createReducer(
	initialState,
	on(loadBreweries, (state, action) => {
		console.log('ld breweries', action.breweries);
		return {
			...state,
			items: action.breweries,
		};
	}),
	on(errorBreweries, (state, action) => ({
		...state,
		error: action.message,
	})),
);

export const selectBreweries = (state: IBreweryState) => state.brewery.items;

export const selectBreweriesError = (state: IBreweryState) =>
	state.brewery.error;
