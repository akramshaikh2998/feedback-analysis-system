import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnualComponent } from './dropdown/annual/annual.component';
import { InfrastructureComponent } from './dropdown/infrastructure/infrastructure.component';
import { SeminarComponent } from './dropdown/seminar/seminar.component';
import { StudentComponent } from './dropdown/student/student.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CollegeComponent } from 'src/forms/college/college.component';
import { InductionComponent } from 'src/forms/induction/induction.component';
import { IndustrialComponent } from 'src/forms/industrial/industrial.component';
import { LecturesComponent } from 'src/forms/lectures/lectures.component';
import { PracticalComponent } from 'src/forms/practical/practical.component';
import { SeminarformComponent } from 'src/forms/seminarform/seminarform.component';


const routes: Routes = [
{path: '',component:HomeComponent},
{path:'gallery',component:GalleryComponent},
{path: 'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'login',component:LoginComponent},
{path:'annual',component:AnnualComponent},
{path:'infrastructure',component:InfrastructureComponent},
{path:'Seminar',component:SeminarComponent},
{path:'student',component:StudentComponent},
{path: 'college',component:CollegeComponent},
{path:'induction',component:InductionComponent},
{path:'industrial',component:IndustrialComponent},
{path:'lectures',component:LecturesComponent},
{path:'practical',component:PracticalComponent},
{path:'seminarform',component:SeminarformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
