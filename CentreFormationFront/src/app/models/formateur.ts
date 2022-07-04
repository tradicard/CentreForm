import { Formation } from "./formation";
import { HistoriqueFormateur } from "./historique-formateur";

export class Formateur {

    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    formation!:Formation
    historique!:HistoriqueFormateur[]
    



}
