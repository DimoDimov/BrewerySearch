import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryRoutingModule } from './brewery-routing.module';
import { BreweryComponent } from './brewery.component';
import { BrewerySearchResultLineComponent } from './brewery-search-result-line/brewery-search-result-line.component';
import { EffectsModule } from '@ngrx/effects';
import { BreweryEffects } from './brewery.effects';
import { StoreModule } from '@ngrx/store';
import { breweryReducer } from './brewery.reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { BreweryFilterByStatePipe } from './pipes/brewery-filter-by-state.pipe';

@NgModule({
  declarations: [
    BrewerySearchComponent,
    BreweryComponent,
    BrewerySearchResultLineComponent,
    BreweryFilterByStatePipe,
  ],
  imports: [
    CommonModule,
    BreweryRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('brewery', breweryReducer),
    EffectsModule.forFeature([BreweryEffects]),
  ],
})
export class BreweryModule {}
