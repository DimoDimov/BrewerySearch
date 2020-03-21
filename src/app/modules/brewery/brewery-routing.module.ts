import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryComponent } from './brewery.component';

const routes: Routes = [
  {
    path: '',
    component: BreweryComponent,
    children: [
      {
        path: 'search',
        component: BrewerySearchComponent,
      },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreweryRoutingModule {}
