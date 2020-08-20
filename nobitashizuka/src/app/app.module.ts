import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeleftComponent } from './homeleft/homeleft.component';
import { Homeright1Component } from './homeright1/homeright1.component';
import { Homeright2Component } from './homeright2/homeright2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PhotosComponent } from './photos/photos.component';
import { BlogComponent } from './blog/blog.component';
import { VideoComponent } from './video/video.component';
import { BlogbodyComponent } from './blogbody/blogbody.component';
// import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataService} from './data.service';
import { ServerpageComponent } from './serverpage/serverpage.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    HomeComponent,
    HomeleftComponent,
    Homeright1Component,
    Homeright2Component,
    AboutusComponent,
    PhotosComponent,
    BlogComponent,
    VideoComponent,
    BlogbodyComponent,
    ServerpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
