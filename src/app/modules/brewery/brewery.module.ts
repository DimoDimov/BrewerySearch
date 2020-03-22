import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryRoutingModule } from './brewery-routing.module';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { BreweryComponent } from './brewery.component';
import { BrewerySearchResultComponent } from './brewery-search-result/brewery-search-result.component';
import { BrewerySearchResultLineComponent } from './brewery-search-result-line/brewery-search-result-line.component';
import { EffectsModule } from '@ngrx/effects';
import { BreweryEffects } from './brewery.effects';

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
		EffectsModule.forFeature([BreweryEffects]),
	],
})
export class BreweryModule {}
