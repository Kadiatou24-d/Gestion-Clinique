import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Medecindtos } from '../../Models/Medecin.';
import { MedecinService } from '../../Services/medecin.service';
import { AjouterMedecinComponent } from '../ajouter-medecin/ajouter-medecin.component';
import { SpecialieDtos } from '../../Models/specialite';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrl: './medecin.component.css'
})
export class MedecinComponent implements OnInit {

  listeMedecin:Medecindtos[]=[]
  medecin:Medecindtos= {} ; 
  nationalite:any
  nom: any
  prenom: any
  sexe:any
  tel:any
 specialite:any

  constructor(private medecinService: MedecinService, private dialog: MatDialog){}

  ngOnInit(): void {

    this.findAllMedcin()
  }
  // findAllMedecin() {
  //   throw new Error('Method not implemented.');
  // }

findAllMedcin(){
  this.medecinService.getMedecin().subscribe((data)=>{
    this.listeMedecin=data
    console.log(this.listeMedecin);
    
  })
 }
 saveMedecin(){
  

 }
 

 openDialog() {
  const dialogRef = this.dialog.open(AjouterMedecinComponent, {
    width: '500px',
    height:'400px',
  
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Medecin ajouté :', result);
    
    
    }
  });
 

}

}




