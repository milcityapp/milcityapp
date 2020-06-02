import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecasMilPage } from './bibliotecas-mil.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecasMilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecasMilPage]
})
export class BibliotecasMilPageModule {}
