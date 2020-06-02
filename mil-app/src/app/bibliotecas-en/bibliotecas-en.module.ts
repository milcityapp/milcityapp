import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecasEnPage } from './bibliotecas-en.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecasEnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecasEnPage]
})
export class BibliotecasEnPageModule {}
