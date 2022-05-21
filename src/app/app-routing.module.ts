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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
