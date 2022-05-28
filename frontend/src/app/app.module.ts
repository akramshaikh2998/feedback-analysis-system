import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { InfrastructureComponent } from './dropdown/infrastructure/infrastructure.component';
import { SeminarComponent } from './dropdown/seminar/seminar.component';
import { StudentComponent } from './dropdown/student/student.component';
import { AnnualComponent } from './dropdown/annual/annual.component';
import { CollegeComponent } from 'src/forms/college/college.component';
import { InductionComponent } from 'src/forms/induction/induction.component';
import { IndustrialComponent } from 'src/forms/industrial/industrial.component';
import { LecturesComponent } from 'src/forms/lectures/lectures.component';
import { PracticalComponent } from 'src/forms/practical/practical.component';
import { SeminarformComponent } from 'src/forms/seminarform/seminarform.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
    AnnualComponent,
    CollegeComponent,
    InductionComponent,
    IndustrialComponent,
    LecturesComponent,
    PracticalComponent,
    SeminarformComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
