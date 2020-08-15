import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';


const Routes: Routes = [{ path: 'home', component: HomeComponent }];


const routes: Routes = [
  { path: '',component: LandingComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
