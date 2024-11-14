// import { Injectable } from '@angular/core';
// import { Medecindtos } from '../Models/Medecin.';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../environments/environment';
// import { SpecialieDtos } from '../Models/specialite';
// @Injectable({
//   providedIn: 'root'
// })
// export class SpecialiteService {

//   private api_host = `${environment.apiUrl}specialite`; 
//   private httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
      
//     }),
//   }

//   constructor(private http:HttpClient) {}

//     getSpecialite() {
//       return this.http.get<SpecialieDtos[]>(`${environment.apiUrl}specialite`,this.httpOptions);
//     }
    
//     saveSpecialite(specialite: SpecialieDtos) {
//       return this.http.post<any>(`${environment.apiUrl}specialite`, specialite); 
//     }
  
    
//   }
  





