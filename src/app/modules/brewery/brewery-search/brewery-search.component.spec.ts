import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerySearchComponent } from './brewery-search.component';

describe('BrewerySearchComponent', () => {
	let component: BrewerySearchComponent;
	let fixture: ComponentFixture<BrewerySearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BrewerySearchComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrewerySearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
