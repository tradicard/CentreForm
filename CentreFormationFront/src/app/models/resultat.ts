import { Participant } from "./participant"
import { Quizz } from "./quizz"

export class Resultat {

    idResultat!:number
    participant!:Participant
    quizz!:Quizz
    note!:number
    reussite!:boolean
}
