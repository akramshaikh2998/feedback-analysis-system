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
import { CollegeComponent } from 'src/app/forms/college/college.component';
import { InductionComponent } from 'src/app/forms/induction/induction.component';
import { IndustrialComponent } from 'src/app/forms/industrial/industrial.component';
import { LecturesComponent } from 'src/app/forms/lectures/lectures.component';
import { PracticalComponent } from 'src/app/forms/practical/practical.component';
import { SeminarformComponent } from 'src/app/forms/seminarform/seminarform.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth-guard/auth.guard';


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
{path:'seminarform',component:SeminarformComponent},
{path:'dashboard',component:DashboardComponent},
{path: 'register',component:RegisterComponent},
{
  // Lazy Loading the public module (all children routes will be under '/public/{route from lazy loaded module}')
  path: 'public',
  loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
},
{
  // Lazy Loading the protected module (all children routes will be under '/protected/{route from lazy loaded module}')
  // The guard will check if the user is having a jwt, otherwise he will be redirected to the base route
  path: 'protected',
  canActivate: [AuthGuard],
  loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
},
{
  // Redirects all paths that are not matching to the 'public' route/path
  path: '**',
  redirectTo: 'public',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
