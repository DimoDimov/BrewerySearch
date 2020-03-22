import { BreweryReducer } from './../modules/brewery/brewery.reducers';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IBreweryState } from '@modules/brewery/brewery.reducers';

// All applicaiton  reducers are regisrered here
// this is the single entry point for our states
export interface AppState {
	brewery: IBreweryState;
}

export const reducers: ActionReducerMap<AppState> = {
	brewery: BreweryReducer,
};

export const selectBrewery = (state: AppState) => state.brewery;

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
