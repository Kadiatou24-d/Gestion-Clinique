import { SpecialieDtos } from "./specialite";

export interface Medecindtos {
    id?: number;
    nationalite?: string;
    nom?: string;
    prenom?: string;
    sexe?: string;
    tel?: string;
    specialite?: SpecialieDtos[];
}
   
    
