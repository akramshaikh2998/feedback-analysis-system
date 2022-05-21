import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Sharepage/navbar/navbar.component';
import { FooterComponent } from './Sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { InfrastructureComponent } from './dropdown/infrastructure/infrastructure.component';
import { SeminarComponent } from './dropdown/seminar/seminar.component';
import { StudentComponent } from './dropdown/student/student.component';
import { AnnualComponent } from './dropdown/annual/annual.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    InfrastructureComponent,
    SeminarComponent,
    StudentComponent,
    AnnualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
