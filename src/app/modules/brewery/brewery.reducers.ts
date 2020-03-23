import { loadBreweries, errorBreweries } from './brewery.actions';
import { on, createReducer } from '@ngrx/store';
import { IBreweryModel } from '@models/brewery.model';

export interface IBreweryState {
  brewery: { items: IBreweryModel[]; error: string };
}

export const initialState: IBreweryState = {
  brewery: { items: [], error: '' },
};

export const breweryReducer = createReducer(
  initialState,
  on(loadBreweries, (state, action) => {
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

export const selectBreweriesStates = (state: IBreweryState) => {
  const setOfStates = new Set<string>();
  state.brewery.items?.map(i => setOfStates.add(i.state));

  return [...setOfStates];
};

export const selectBreweriesError = (state: IBreweryState) =>
  state.brewery.error;
