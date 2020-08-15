import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PhotosComponent} from './photos/photos.component';
// const Routes: Routes = [{ path: 'home', component: HomeComponent }];/
import {BlogComponent} from './blog/blog.component';
import {VideoComponent} from './video/video.component';
const routes: Routes = [
  { path: '',component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component:AboutusComponent },
  { path: 'photos', component: PhotosComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'video', component:VideoComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
