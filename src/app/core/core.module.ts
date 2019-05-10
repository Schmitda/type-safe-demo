import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TSFormBuilder} from 'angular-type-safe-form';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    TSFormBuilder
  ]
})
export class CoreModule { }
