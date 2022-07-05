import { Contact } from "./contact";
import { Role } from "./role";

export class Commercial{
    id!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    role!: Role; 
    contacts!:Contact[]
}