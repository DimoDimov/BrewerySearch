import { selectBreweries, selectBreweriesStates } from './../brewery.reducers';
import { IBreweryModel } from '@models/brewery.model';
import { IBreweryState } from '@modules/brewery/brewery.reducers';
import { getBreweries } from './../brewery.actions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-brewery-search',
  templateUrl: './brewery-search.component.html',
  styleUrls: ['./brewery-search.component.css'],
})
export class BrewerySearchComponent implements OnInit {
  searchBreweryForm = new FormGroup({
    filterByName: new FormControl(''),
  });

  breweryState$: Observable<IBreweryState>;
  breweries$: Observable<IBreweryModel[]>;
  breweryStates$: Observable<string[]>;
  error$: Observable<string>;
  options: any[];

  constructor(private store: Store<IBreweryState>) {
    this.store.dispatch(getBreweries({ name: '' }));

    this.breweries$ = this.store.pipe(select(selectBreweries));
    this.breweryStates$ = this.store.pipe(select(selectBreweriesStates));

    this.onChanges();
  }

  validateNumber(event) {
    const keyCode = event.keyCode;
    const excludedKeys = [8, 32, 37, 39, 46];

    if (
      !(
        (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122) ||
        excludedKeys.includes(keyCode)
      )
    ) {
      event.preventDefault();
    }
  }

  onChanges(): void {
    this.searchBreweryForm
      .get('filterByName')
      .valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map(query => {
          const name = query?.length > 2 ? query : '';
          this.store.dispatch(getBreweries({ name }));
        }),
      )
      .subscribe();
  }

  onStateOptionChange = (option: string) => {
    console.log('selected', option);
  };

  ngOnInit(): void {}
}
