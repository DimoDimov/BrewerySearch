import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewerySearchResultComponent } from './brewery-search-result.component';

describe('BrewerySearchResultComponent', () => {
  let component: BrewerySearchResultComponent;
  let fixture: ComponentFixture<BrewerySearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrewerySearchResultComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewerySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
