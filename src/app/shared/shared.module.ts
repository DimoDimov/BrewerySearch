import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AllowAlphabetOnlyDirective } from './directive/allow-alphabet-only.directive';

@NgModule({
  declarations: [HeaderComponent, AllowAlphabetOnlyDirective],
  imports: [CommonModule, ScrollingModule],
  exports: [HeaderComponent, AllowAlphabetOnlyDirective],
})
export class SharedModule {}
