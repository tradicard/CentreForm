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



}
