import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ScientificComponent } from './scientific/scientific.component';

const routes: Routes = [
  {path: 'normal', component: CalculatorComponent},
  {path: 'scientific', component: ScientificComponent},
  {path: '', redirectTo: '/normal', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
