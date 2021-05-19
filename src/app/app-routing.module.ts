import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgImageSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
