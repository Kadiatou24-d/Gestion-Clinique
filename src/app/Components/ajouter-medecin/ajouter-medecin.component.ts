import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Medecindtos } from '../../Models/Medecin.';
import { MedecinService } from '../../Services/medecin.service';


@Component({
  selector: 'app-ajouter-medecin',
  templateUrl: './ajouter-medecin.component.html',
  styleUrls: ['./ajouter-medecin.component.css']
})
export class AjouterMedecinComponent implements OnInit {
  medecinForm!: FormGroup; 
  listeMedecin:Medecindtos[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AjouterMedecinComponent>,
    private medecinService: MedecinService
  ) {}

  ngOnInit(): void {
   
    this.medecinForm = this.fb.group({
      nationalite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      tel: ['', [Validators.required]], 
      specialite: ['', Validators.required],
     });

    this.findAllMedecin()
  }
 

  onSubmit(): void {
    if (this.medecinForm.valid) {

      console.log(this.medecinForm.value);

      
      this.medecinService.saveMedecin(this.medecinForm.value).subscribe({
        next: (response) => {
          this.findAllMedecin()
          alert('Medecin ajouté avec succès!');
          this.dialogRef.close(response); 
         

        },
        error: (err) => {
          console.error("Erreur détaillée : ", err.message);
          
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      });
    } else {
      console.log(this.findAllMedecin)
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }

  findAllMedecin(): void {
    this.medecinService.getMedecin().subscribe((data)=>{
      this.listeMedecin=data
      console.log(this.listeMedecin);
      
    })

    
   }
  }
   

 