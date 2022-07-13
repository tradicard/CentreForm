import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { Question } from 'src/app/models/question';
import { Quizz } from 'src/app/models/quizz';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/service/question.service';
import { QuizzService } from 'src/app/service/quizz.service';
import { ReponseService } from 'src/app/service/reponse.service';

@Component({
  selector: 'app-afficher-quizz',
  templateUrl: './afficher-quizz.component.html',
  styleUrls: ['./afficher-quizz.component.css']
})
export class AfficherQuizzComponent implements OnInit {
  quizz!:Quizz
  quests!:Question[]
  reponses1!:Reponse[]
  reponses2!:Reponse[]
  reponses3!:Reponse[]
  reponses4!:Reponse[]

  superreponses!:any[]
  RQ1!:string
  RQ2_1:boolean=false
  RQ2_2:boolean=false
  RQ2_3:boolean=false
  RQ2_4:boolean=false
  timeLeft: number = 60;
  interval!:any;
  subscribeTimer: any;
  pts:number=0
  question:string="un"

  constructor(private router:Router, private route:ActivatedRoute, private serviceQuizz:QuizzService,
    private serviceQuestion:QuestionService, private serviceReponse:ReponseService) { }

  ngOnInit(): void {
    this.startTimer()
    this.quizz=new Quizz()
    this.recupQuizz()
  }

  recupQuizz(){
    const idQuizz=+this.route.snapshot.params['id']
    
    this.serviceQuizz.getById(idQuizz).subscribe(
      response=>{
        this.quizz=response


        this.serviceQuestion.getAllbyquizz(this.quizz.idQuizz).subscribe(
          response=>{
            this.quests=response


            
              this.serviceReponse.getAllbyquest(this.quests[0].idQuestion).subscribe(
                response=>{
                  this.reponses1=response
                
                }
              )
              this.serviceReponse.getAllbyquest(this.quests[1].idQuestion).subscribe(
                response=>{
                  this.reponses2=response
                
                }
              )
              this.serviceReponse.getAllbyquest(this.quests[2].idQuestion).subscribe(
                response=>{
                  this.reponses3=response
                
                }
              )
              this.serviceReponse.getAllbyquest(this.quests[3].idQuestion).subscribe(
                response=>{
                  this.reponses4=response
                
                }
              )
            })
          }
        )

  }

  saveQ () {
    
    if (parseInt(this.RQ1) === 1) {
      this.pts=this.pts+1
      console.log(this.pts)
      console.log("q1")
      
    }
    this.question="deux"
    }
    
    saveQ2 () {
      if (this.RQ2_2 && this.RQ2_3 == true) {
        this.pts=this.pts+1
        console.log(this.pts)
        
    }
    this.question="trois"
  }

    saveQuizz() {
      if (confirm("Valider ?")) {
        clearInterval(this.interval);
        sessionStorage.setItem("pts",this.pts.toString())
        this.router.navigateByUrl("resultat")
      }
    }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft === 0){
        this.saveQuizz()
        
        
      }
    },1000)
  }
}
