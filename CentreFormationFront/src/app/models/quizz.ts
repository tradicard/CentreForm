import { Formation } from "./formation";
import { Formateur } from "./formateur";
import { Question } from "./question";
import { Resultat } from "./resultat";

export class Quizz {

    idQuizz!:number; 
    questions!:Question[]
    formation!:Formation
    formateur!:Formateur
    resultats!:Resultat[]
    noteRequise!:number
    nbQuestion!:number

}
