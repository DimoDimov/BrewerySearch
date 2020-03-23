import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-brewery-search-result',
  templateUrl: './brewery-search-result.component.html',
  styleUrls: ['./brewery-search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrewerySearchResultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
