import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'cidade', loadChildren: './cidade/cidade.module#CidadePageModule' 
  },
  { path: 'bibliotecas', loadChildren: './bibliotecas/bibliotecas.module#BibliotecasPageModule' },
  { path: 'bibliotecas-mil', loadChildren: './bibliotecas-mil/bibliotecas-mil.module#BibliotecasMilPageModule' },
  { path: 'biblioteca-mil-form', loadChildren: './biblioteca-mil-form/biblioteca-mil-form.module#BibliotecaMilFormPageModule' },
  { path: 'bibliotecas-en', loadChildren: './bibliotecas-en/bibliotecas-en.module#BibliotecasEnPageModule' },
  { path: 'bibliotecas-mil-en', loadChildren: './bibliotecas-mil-en/bibliotecas-mil-en.module#BibliotecasMilEnPageModule' },
  { path: 'cidade-en', loadChildren: './cidade-en/cidade-en.module#CidadeEnPageModule' },
  { path: 'home-en', loadChildren: './home-en/home-en.module#HomeEnPageModule' },
  { path: 'biblioteca-mil-form-en', loadChildren: './biblioteca-mil-form-en/biblioteca-mil-form-en.module#BibliotecaMilFormEnPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
