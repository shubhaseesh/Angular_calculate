import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ScientificComponent } from './scientific/scientific.component';

const routes: Routes = [
  {path: 'normal', component: CalculatorComponent},
  {path: 'scientific', component: ScientificComponent},
  {path: '', redirectTo: '/normal', pathMatch: 'full'}];


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
