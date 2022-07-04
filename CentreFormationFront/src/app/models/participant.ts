import { Formation } from "./formation";
import { HistoriqueParticipant } from "./historique-participant";
import { Paiement } from "./paiement";
import { Relance } from "./relance";
import { Role } from "./role";


export class Participant 
{
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    role!: Role; 

    formations!: Formation[]
    historique!: HistoriqueParticipant
    relances!:Relance[]

    paiements!:Paiement[]
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    role!: Role;

   

}