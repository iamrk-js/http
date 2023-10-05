import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const matModule = [MatSnackBarModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModule
  ],
  exports : [
    ...matModule
  ]
})
export class MaterialModule { }
