import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    // BreweryModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionWithinNgZone: true,
        },
      },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
