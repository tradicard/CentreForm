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

    constructor(idProspect:number, nom:string, prenom:string, mail:string, tel:string)
    {
       
        this.idProspect=idProspect
        this.nom=nom
        this.prenom=prenom
        this.mail=mail
        this.tel=tel
    }
}