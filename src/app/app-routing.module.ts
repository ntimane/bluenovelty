import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CareerComponent } from './pages/career/career.component';
import { BookTalentComponent } from './pages/book-talent/book-talent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
  { path: 'career', component: CareerComponent }
  { path: 'book-talent', component: BookTalentComponent }
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),NgImageSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
