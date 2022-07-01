import { Formateur } from "./formateur"
import { Participant } from "./participant"

export class Formation {

    idFormation!:number
    libFormation!:string
    description!:string
    dateDebut!:string
    dateFin!:string
    prix!:number

    formateur!:Formateur

    participants!:Participant[]

    constructor(idFormation:number, libFormation:string, description:string, dateDebut:string, dateFin:string, prix:number)
    {
        this.idFormation=idFormation
        this.libFormation=libFormation
        this.description=description
        this.dateDebut=dateDebut
        this.dateFin=dateFin
        this.prix=prix
    }

}
