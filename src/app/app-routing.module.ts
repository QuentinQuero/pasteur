import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BinPageComponent} from './pages/bin-page/bin-page.component';
import {MateriauxPageComponent} from './pages/materiaux-page/materiaux-page.component';

const routes: Routes = [
  {
    path: 'bin',
    component: BinPageComponent
  }, {
    path: 'materiaux',
    component: MateriauxPageComponent
  }, {
    path: 'things',
    component: BinPageComponent
  }, {
    path: '**',
    redirectTo: 'bin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
