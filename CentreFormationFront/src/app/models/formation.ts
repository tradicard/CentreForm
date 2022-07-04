import { Formateur } from "./formateur"
import { HistoriqueFormateur } from "./historique-formateur"
import { HistoriqueParticipant } from "./historique-participant"
import { Participant } from "./participant"

export class Formation {

    idFormation!:number
    libFormation!:string
    description!:string
    dateDebut!:string
    dateFin!:string
    prix!:number
    historiqueFormateur!:HistoriqueFormateur[]
    historiqueParticipant!:HistoriqueParticipant[]
    formateur!:Formateur

    participants!:Participant[]



}
