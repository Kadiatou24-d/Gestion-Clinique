import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './Components/patient/patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MedecinComponent } from './Components/medecin/medecin.component';
import { AjouterMedecinComponent } from './Components/ajouter-medecin/ajouter-medecin.component'; 
import { AjouterPatientComponent } from './Components/ajouter-patient/ajouter-patient.component'; // Vérifiez le chemin ici

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component'; 
import { MatCardModule } from '@angular/material/card';
import { SpecialiteComponent } from './Components/specialite/specialite.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    MedecinComponent,
    AjouterMedecinComponent,
    AjouterPatientComponent,
    HomeComponent,
    SpecialiteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
