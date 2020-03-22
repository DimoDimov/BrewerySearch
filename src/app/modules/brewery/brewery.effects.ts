import { IBreweryModel } from '@models/brewery.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getBreweries, loadBreweries } from './brewery.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BreweryService } from '@core/brewery.service';

@Injectable()
export class BreweryEffects {
	loadBreweries$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getBreweries),
			mergeMap(action =>
				this.breweryService.getBreweries(action.name).pipe(
					map(
						(breweries: IBreweryModel[]) => loadBreweries({ breweries }),
						catchError((message: string) =>
							of({
								type: 'ERROR breweries',
								message,
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
