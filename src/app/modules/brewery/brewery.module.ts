import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryRoutingModule } from './brewery-routing.module';
import { BrewerySearchComponent } from './brewery-search/brewery-search.component';

@NgModule({
  declarations: [BrewerySearchComponent],
  imports: [CommonModule, BreweryRoutingModule],
})
export class BreweryModule {}
