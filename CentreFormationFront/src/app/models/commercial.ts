import { Contact } from "./contact";

export class Commercial{

    idCommercial!:number
    username!:string;
    password!:string;
    nom!:string;
    prenom!:string;
    mail!:string;
    contacts!:Contact[]
}