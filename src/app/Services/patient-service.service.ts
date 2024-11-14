import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patientdtos } from '../Models/Patient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
   private api_host= `{environment.apiUrl}patient`

   private httpOption={
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer'

    })
   
   }

  constructor(private http:HttpClient) { }


  getPatient(){
    return this.http.get<Patientdtos[]>(environment.apiUrl+"patient",this.httpOption)
  }

  savePatient(patient: Patientdtos){
    return this.http.post<any>(environment.apiUrl+'patient',patient);
  }
}
