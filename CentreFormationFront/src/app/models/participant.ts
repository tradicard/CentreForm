import { Formation } from "./formation";
import { Paiement } from "./paiement";
import { Relance } from "./relance";
import { Role } from "./role";


export class Participant 
{

    formations!: Formation[]

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