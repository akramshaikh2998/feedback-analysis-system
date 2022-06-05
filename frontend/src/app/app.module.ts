import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';




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
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { CollegeComponent } from 'src/app/forms/college/college.component';
import { InductionComponent } from 'src/app/forms/induction/induction.component';
import { IndustrialComponent } from 'src/app/forms/industrial/industrial.component';
import { LecturesComponent } from 'src/app/forms/lectures/lectures.component';
import { PracticalComponent } from 'src/app/forms/practical/practical.component';
import { SeminarformComponent } from 'src/app/forms/seminarform/seminarform.component';
import { AdminComponent } from './pages/admin/admin.component';


export const LOCALSTORAGE_TOKEN_KEY = 'login_&_Register';

// specify tokenGetter for the angular jwt package
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}

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
    DashboardComponent,
    RegisterComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
