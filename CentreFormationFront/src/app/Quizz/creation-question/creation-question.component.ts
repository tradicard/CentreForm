import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Quizz } from 'src/app/models/quizz';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/service/question.service';
import { QuizzService } from 'src/app/service/quizz.service';
import { ReponseService } from 'src/app/service/reponse.service';

@Component({
  selector: 'app-creation-question',
  templateUrl: './creation-question.component.html',
  styleUrls: ['./creation-question.component.css']
})
export class CreationQuestionComponent implements OnInit {

  question!:Question
  quizz!:Quizz
  typeReponse1:boolean=false
  typeReponse2:boolean=false
  typeReponse3:boolean=false
  typeReponse4:boolean=false
  
  reponse1!:string
  reponse2!:string
  reponse3!:string
  reponse4!:string
  temps!:string
  nbQuestion!:number
  idQuizz!:number
  r!:Reponse
  r1!:Reponse
  disparait:boolean=false
  nbreste!:number


  constructor(
    private router:Router
    ,private route:ActivatedRoute,
    private serviceQuizz:QuizzService,
    private serviceQuestion:QuestionService,
    private serviceReponse:ReponseService) { }

  ngOnInit(): void {
    this.recupererQuizz()
    this.question=new Question()
    this.nbQuestion=Number(sessionStorage.getItem("nbquestion"))
    this.nbreste=Number(sessionStorage.getItem("nbrest"))
    this.r=new Reponse()
  }

  recupererQuizz(){
    const idProspect=+this.route.snapshot.params['id']
    this.serviceQuizz.getById(idProspect).subscribe(
      response=>this.quizz=response
    )
  }

  save() {
    /*
    console.log(this.typeReponse1)
    
    console.log(this.typeReponse2)
    console.log(this.reponse2)
    console.log(this.typeReponse3)
    console.log(this.reponse3)
    console.log(this.typeReponse4)
    console.log(this.reponse4)
    if (this.typeReponse1 === false) {
      console.log("ok")
    }
    */
    this.question.quizz=this.quizz
    this.serviceQuestion.ajouter(this.question).subscribe(
      response=>{

        this.question=response
        console.log(this.reponse1)
        this.r.detail=this.reponse1
        this.r.correct=this.typeReponse1
        this.r.question=this.question

        this.serviceReponse.ajouter(this.r).subscribe(
          response=>{

        this.r.detail=this.reponse2
        this.r.correct=this.typeReponse2
        this.r.question=this.question

        this.serviceReponse.ajouter(this.r).subscribe(
          response=>{
            this.r.detail=this.reponse3
        this.r.correct=this.typeReponse3
        this.r.question=this.question

        this.serviceReponse.ajouter(this.r).subscribe(
          response=>{
            this.r.detail=this.reponse4
        this.r.correct=this.typeReponse4
        this.r.question=this.question

        this.serviceReponse.ajouter(this.r).subscribe(
          response=>{
            if(this.nbreste<this.nbQuestion-1){
            this.nbreste=this.nbreste+1
            sessionStorage.setItem("nbrest",this.nbreste.toString())
            this.ngOnInit()}
            else{
              this.router.navigateByUrl('creerQuizz')
            }
          }
        )
          }
        )
          }
        )
          }
        )
        
      }
    )


  }
}
