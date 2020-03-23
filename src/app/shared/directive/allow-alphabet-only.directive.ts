import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllowAlphabetOnly]',
})
export class AllowAlphabetOnlyDirective {
  constructor() {}

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key !== undefined) {
      // tslint:disable-next-line
      const excludedKeys = ['Backspace', ' ', "'"];

      if (!(/^[a-z]$/i.test(event.key) || excludedKeys.includes(event.key))) {
        event.preventDefault();
      }
    } else if (event.keyCode !== undefined) {
      // Handle the event with KeyboardEvent.keyCode and set handled true.

      const keyCode = event.keyCode;

      const excludedKeys = [8, 32, 37, 39, 46];
      if (
        !(
          (keyCode >= 65 && keyCode <= 90) ||
          (keyCode >= 97 && keyCode <= 122) ||
          excludedKeys.includes(keyCode)
        )
      ) {
        event.preventDefault();
      }
    }
  }
}
