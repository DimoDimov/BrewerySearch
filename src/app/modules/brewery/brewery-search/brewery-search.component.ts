import { selectBreweries, selectBreweriesStates } from './../brewery.reducers';
import { IBreweryModel } from '@models/brewery.model';
import { IBreweryState } from '@modules/brewery/brewery.reducers';
import { getBreweries } from './../brewery.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  filter,
  switchMap,
} from 'rxjs/operators';
@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
  styleUrls: ['./brewery-search.component.css'],
})
export class BrewerySearchComponent implements OnDestroy {
  searchBreweryForm = new FormGroup({
    filterByName: new FormControl(''),
    filterByState: new FormControl(''),
  });

  destroy$: Subject<boolean> = new Subject<boolean>();
  breweryState$: Observable<IBreweryState>;
  breweries$: Observable<IBreweryModel[]>;
  breweryStates$: Observable<string[]>;
  error$: Observable<string>;
  filterState: string;

  constructor(private store: Store<IBreweryState>) {
    this.store.dispatch(getBreweries({ name: '' }));

    this.breweries$ = this.store.pipe(select(selectBreweries));
    this.breweryStates$ = this.store.pipe(select(selectBreweriesStates));

    this.onChanges();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    // unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }

  onChanges(): void {
    this.searchBreweryForm
      .get('filterByName')
      .valueChanges.pipe(
        takeUntil(this.destroy$),
        debounceTime(400),
        distinctUntilChanged(),
        map(query => {
          const name = query?.length > 2 ? query : '';
          this.store.dispatch(getBreweries({ name }));
        }),
      )
      .subscribe();
  }

  onStateOptionChange(newState: string) {
    this.filterState = newState;
  }

  onReset() {
    this.searchBreweryForm.get('filterByName').setValue('');
    this.searchBreweryForm.get('filterByState').setValue('');
    this.filterState = '';
  }
}
