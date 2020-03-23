import { IBreweryModel } from '@models/brewery.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breweryFilterByState',
})
export class BreweryFilterByStatePipe implements PipeTransform {
  transform(list: IBreweryModel[], state: string): IBreweryModel[] {
    return state && list
      ? list.filter(b => b.state === state)
      : list
      ? list
      : [];
  }
}
