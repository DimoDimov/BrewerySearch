import { IBreweryModel } from '@models/brewery.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getBreweries } from './brewery.actions';
import { switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { BreweryService } from '@core/brewery.service';

@Injectable()
export class BreweryEffects {
	loadBreweries$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getBreweries),
			mergeMap(action =>
				this.breweryService.getBreweries().pipe(
					map(
						breweries => ({
							type: 'LOAD breweries',
							breweries,
						}),
						catchError(error =>
							of({
								type: 'ERROR breweries',
								message: error,
							}),
						),
					),
				),
			),
		),
	);

	constructor(
		private actions$: Actions,
		private breweryService: BreweryService,
	) {}
}
