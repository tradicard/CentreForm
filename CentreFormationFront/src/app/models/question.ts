import { Quizz } from "./quizz"
import { Reponse } from "./reponse"

export class Question {

    idQuestion!:number
    reponses!:Reponse[]
    quizz!:Quizz
    intitule!:string
    tempsReponse!:number
    commentaire!:string
}
