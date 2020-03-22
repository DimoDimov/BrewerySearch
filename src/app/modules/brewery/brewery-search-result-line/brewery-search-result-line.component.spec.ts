import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerySearchResultLineComponent } from './brewery-search-result-line.component';

describe('BrewerySearchResultLineComponent', () => {
	let component: BrewerySearchResultLineComponent;
	let fixture: ComponentFixture<BrewerySearchResultLineComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrewerySearchResultLineComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrewerySearchResultLineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
