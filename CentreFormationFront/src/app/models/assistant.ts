import { Relance } from "./relance";
import { Role } from "./role";

export class Assistant {
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    role!: Role; 
    relances!:Relance[]
}
