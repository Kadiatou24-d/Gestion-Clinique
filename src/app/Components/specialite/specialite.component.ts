import { Component, OnInit } from '@angular/core';
import { SpecialieDtos } from '../../Models/specialite';
import { SpecialiteService } from '../../Services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent implements OnInit {
  listeSpecialite: SpecialieDtos[]=[]
  loading: boolean = true;
  

  constructor(private specialiteService: SpecialiteService){

  }
  ngOnInit(): void{

    this.findAllSpecialite()
  }

  findAllSpecialite(){
    this.specialiteService.getSpecialite().subscribe((data)=>{
      this.listeSpecialite=data
      this.loading = false;
      console.log(this.listeSpecialite);
      this.loading = false;
    })
  }

  saveSpecialite(){

}


}
