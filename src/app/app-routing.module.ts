import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component'; 
import { PatientComponent } from './Components/patient/patient.component'; 
import { MedecinComponent } from './Components/medecin/medecin.component'; 


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'patient', component: PatientComponent }, 
  { path: 'medecin', component: MedecinComponent }, 
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'patients', component: PatientComponent, canActivate: [AuthGuard] },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule] 
})
export class AppRoutingModule { }
