import { Component, OnInit, Input } from '@angular/core';
import { IBreweryModel } from '@models/brewery.model';

@Component({
  selector: 'app-brewery-search-result-line',
  templateUrl: './brewery-search-result-line.component.html',
  styleUrls: ['./brewery-search-result-line.component.css'],
})
export class BrewerySearchResultLineComponent implements OnInit {
  @Input() brewery: IBreweryModel;
  constructor() {}

  ngOnInit(): void {}
}
