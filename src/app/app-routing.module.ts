import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// lazy loading
const routes: Routes = [
  { path: '', redirectTo: 'brewery', pathMatch: 'full' },
  {
    path: 'brewery',
    loadChildren: () =>
      import('@modules/brewery/brewery.module').then(m => m.BreweryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
