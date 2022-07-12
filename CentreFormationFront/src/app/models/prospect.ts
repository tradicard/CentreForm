import { Contact } from "./contact"
import { Utilisateur } from "./utilisateur"

export class Prospect 
{

    idProspect!:number
    nom!:string
    prenom!:string
    mail!:string
    tel!:string

    contacts!:Contact[]

    
}