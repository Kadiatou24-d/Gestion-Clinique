import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Medecindtos } from '../Models/Medecin.';


@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  addMedecin(medecin: Medecindtos) {
    throw new Error('Method not implemented.');
  }
  // addSpecialiteToMedecin(medecinId: number, specialite: SpecialieDtos) {
  //   throw new Error('Method not implemented.');
  // }
   private api_host = `${environment.apiUrl}medecin`; 

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    }),
  }

  constructor(private http: HttpClient) {}

  getMedecin() {
    return this.http.get<Medecindtos[]>(environment.apiUrl+"medecin",this.httpOptions);
  }
  

  saveMedecin(medecin: Medecindtos) {
    return this.http.post<any>(`${environment.apiUrl}medecin`, medecin); 
  }
 
  
  }

