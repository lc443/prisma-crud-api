import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHomeComponent } from './components/nav/nav-home/nav-home.component';
import { HomeComponent } from './components/home/home.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { NavExercisesComponent } from './components/nav/nav-exercises/nav-exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHomeComponent,
    HomeComponent,
    ExercisesComponent,
    NavExercisesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
