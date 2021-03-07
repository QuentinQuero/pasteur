import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BinPageComponent} from './bin-page/bin-page.component';

const routes: Routes = [
  {
    path: 'bin',
    component: BinPageComponent
  }, {
    path: 'materiaux',
    component: BinPageComponent
  }, {
    path: 'things',
    component: BinPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
