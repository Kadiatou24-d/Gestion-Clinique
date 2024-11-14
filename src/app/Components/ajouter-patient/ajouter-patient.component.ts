import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientServiceService } from '../../Services/patient-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Patientdtos } from '../../Models/Patient';

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.css']
})
export class AjouterPatientComponent implements OnInit {
  patientForm!: FormGroup; // Utilisation de "!" pour indiquer qu'il sera initialisé plus tard
  listePatient:Patientdtos[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AjouterPatientComponent>,
    private patientService: PatientServiceService
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire réactif avec les champs et les validateurs
    this.patientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required,]], // Validation pour l'email
      tel: ['', [Validators.required]], // Validation pour téléphone
      sexe: ['', Validators.required],
      nationalite: ['', Validators.required],
    });
    this.findAllPatient()
  }

  onSubmit(): void {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value); // Log des données pour debug

      // Envoi des données via le service
      this.patientService.savePatient(this.patientForm.value).subscribe({
        next: (response) => {
          this.findAllPatient()
          alert('Patient ajouté avec succès!');
          this.dialogRef.close(response); // Ferme la boîte de dialogue après succès
         

        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du patient:', err);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Ferme la boîte de dialogue sans enregistrer
  }

  findAllPatient(){
    this.patientService.getPatient().subscribe((data)=>{
      this.listePatient=data
      console.log(this.listePatient);
      
    })
   }
}
