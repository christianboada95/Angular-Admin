import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/** Components */

/** Directives */

/** Pipes */


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,   // ngIf, ngFor...
    RouterModule,   // routerLink, <router-oulet>
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

  ]
})
export class SharedModule { }
