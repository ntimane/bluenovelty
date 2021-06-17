import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { CareerComponent } from './pages/career/career.component';
import { BookTalentComponent } from './pages/book-talent/book-talent.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    CareerComponent,
    BookTalentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgImageSliderModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
