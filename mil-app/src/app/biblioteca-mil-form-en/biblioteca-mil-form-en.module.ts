import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecaMilFormEnPage } from './biblioteca-mil-form-en.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaMilFormEnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecaMilFormEnPage]
})
export class BibliotecaMilFormEnPageModule {}
