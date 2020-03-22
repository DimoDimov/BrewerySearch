import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreweryService } from './brewery.service';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [BreweryService],
})

/* 
 This type of module is imported only from the main module, as it contains 
 singleton services that any element in the application can use. We do not 
 want to import it in each module, as this will create additional instances. 
 */
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only',
			);
		}
	}
}
