import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecaMilFormPage } from './biblioteca-mil-form.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaMilFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecaMilFormPage]
})
export class BibliotecaMilFormPageModule {}
