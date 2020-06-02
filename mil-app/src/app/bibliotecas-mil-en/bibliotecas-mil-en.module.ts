import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BibliotecasMilEnPage } from './bibliotecas-mil-en.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecasMilEnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BibliotecasMilEnPage]
})
export class BibliotecasMilEnPageModule {}
