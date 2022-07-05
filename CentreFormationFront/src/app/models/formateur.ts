import { Formation } from "./formation";
import { HistoriqueFormateur } from "./historique-formateur";
import { Role } from "./role";

export class Formateur {

    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    role!:Role
    formation!:Formation
    historique!:HistoriqueFormateur[]
    



}
