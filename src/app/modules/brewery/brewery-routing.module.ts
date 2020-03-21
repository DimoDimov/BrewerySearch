import { BrewerySearchComponent } from './brewery-search/brewery-search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'brewery',
    children: [
      {
        path: '',
        component: BrewerySearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreweryRoutingModule {}
