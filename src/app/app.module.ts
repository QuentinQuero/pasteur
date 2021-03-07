import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { BinPageComponent } from './pages/bin-page/bin-page.component';
import { MateriauxPageComponent } from './pages/materiaux-page/materiaux-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BinPageComponent,
    MateriauxPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
