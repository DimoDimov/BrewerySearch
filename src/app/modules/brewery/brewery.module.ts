import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryRoutingModule } from './brewery-routing.module';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { BreweryComponent } from './brewery.component';
import { BrewerySearchResultComponent } from './brewery-search-result/brewery-search-result.component';
import { BrewerySearchResultLineComponent } from './brewery-search-result-line/brewery-search-result-line.component';
import { EffectsModule } from '@ngrx/effects';
import { BreweryEffects } from './brewery.effects';
import { StoreModule } from '@ngrx/store';
import { breweryReducer } from './brewery.reducers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		BrewerySearchComponent,
		BreweryComponent,
		BrewerySearchResultComponent,
		BrewerySearchResultLineComponent,
	],
	imports: [
		CommonModule,
		BreweryRoutingModule,
		ReactiveFormsModule,
		StoreModule.forFeature('brewery', breweryReducer),
		EffectsModule.forFeature([BreweryEffects]),
	],
})
export class BreweryModule {}
