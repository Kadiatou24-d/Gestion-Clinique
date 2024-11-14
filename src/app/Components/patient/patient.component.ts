import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../../Services/patient-service.service';
import { Patientdtos } from '../../Models/Patient';
import { MatDialog } from '@angular/material/dialog';
import { AjouterPatientComponent } from '../ajouter-patient/ajouter-patient.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {

  listePatient:Patientdtos[]=[]
  patient: Patientdtos= {} ; 
  nom: any
  prenom: any
  tel:any

  constructor(private patientService : PatientServiceService, private dialog: MatDialog){}

  ngOnInit(): void {

    this.findAllPatient()
  }

findAllPatient(){
  this.patientService.getPatient().subscribe((data)=>{
    this.listePatient=data
    console.log(this.listePatient);
    
  })
 }
 savePatient(){
  

 }

 openDialog() {
  const dialogRef = this.dialog.open(AjouterPatientComponent, {
    width: '500px',
    height:'400px',
  
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Patient ajouté :', result);
    
    
    }
  });
 

}
}




