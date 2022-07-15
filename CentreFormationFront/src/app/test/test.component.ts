import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from '../models/participant';
import { Question } from '../models/question';
import { Quizz } from '../models/quizz';
import { Reponse } from '../models/reponse';
import { Resultat } from '../models/resultat';
import { QuestionService } from '../service/question.service';
import { QuizzService } from '../service/quizz.service';
import { ReponseService } from '../service/reponse.service';
import { ResultatService } from '../service/resultat.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
liste=[1,2,3,4]
listea=["a","b","c","d"]
superliste=[this.liste,this.listea]



quizz!:Quizz
quests!:Question[]
q!:Question
reponses!:Reponse[]
resultat!:Resultat

superreponses!:any[]
RQ1=false
RQ2=false
RQ3=false
RQ4=false
user!:Participant
RQ2_1:boolean=false
RQ2_2:boolean=false
RQ2_3:boolean=false
RQ2_4:boolean=false
timeLeft!: number;
interval!:any;
subscribeTimer: any;
pts:number=0
question:string="un"
li!:boolean[]
nbreste!:number
note!:number

constructor(private router:Router, private route:ActivatedRoute, private serviceQuizz:QuizzService,
  private serviceQuestion:QuestionService, private serviceReponse:ReponseService, private serviceResultat:ResultatService) { }

ngOnInit(): void {
    this.nbreste=0
    this.note=0
    console.log(this.note)
  this.li=[this.RQ1,this.RQ2,this.RQ3,this.RQ4]
  this.startTimer()
  this.quizz=new Quizz()
  this.recupQuizz()
  this.resultat=new Resultat()
}
ngOnInit2(): void {
  this.RQ2_1=false
this.RQ2_2=false
this.RQ2_3=false
this.RQ2_4=false

    this.nbreste=Number(sessionStorage.getItem("nbrest"))
    this.note=Number(sessionStorage.getItem("note"))
  this.startTimer()
  this.quizz=new Quizz()
  this.recupQuizz()
}

recupQuizz(){
  const idQuizz=+this.route.snapshot.params['id']
  sessionStorage.setItem("idQuizz",idQuizz.toString())
  this.serviceQuizz.getById(idQuizz).subscribe(
    response=>{
      this.quizz=response
      sessionStorage.setItem("nbquestion",this.quizz.nbQuestion.toString())
      
      this.serviceQuestion.getAllbyquizz(this.quizz.idQuizz).subscribe(
        response=>{
          this.quests=response
          this.q=this.quests[this.nbreste]
          this.superreponses=[]

            this.serviceReponse.getAllbyquest(this.q.idQuestion).subscribe(
              response=>{
                this.reponses=response
                
              }
            )
          })
            
          
        }
      )

}
saveQ2(){
  console.log(this.RQ2_1)
  console.log(this.RQ2_2)
  console.log(this.RQ2_3)
  console.log(this.RQ2_4)
  
  if(this.RQ2_1===this.reponses[0].correct){
    if(this.RQ2_2===this.reponses[1].correct){
      if(this.RQ2_3===this.reponses[2].correct){
        if(this.RQ2_4===this.reponses[3].correct){
          
          this.note=this.note+1
          sessionStorage.setItem("note",this.note.toString())
          this.nbreste=this.nbreste+1
          sessionStorage.setItem("nbrest",this.nbreste.toString())
          
          
              if(this.nbreste==this.quizz.nbQuestion){

                let uStr = sessionStorage.getItem("u");
                if (uStr) {
                  this.user = JSON.parse(uStr) as Participant;
                }
                this.resultat.participant=this.user
                this.resultat.quizz=this.quizz
                this.resultat.note=this.note
                console.log(this.note)
                if(this.note>=this.quizz.noteRequise){
                  this.resultat.reussite=true
                }else{
                  this.resultat.reussite=false
                }
                this.serviceResultat.ajouter(this.resultat).subscribe(
                  response=>{
                    this.resultat=response
                    this.pauseTimer()
                    this.router.navigateByUrl("affichediplome/"+this.resultat.idResultat)
                    sessionStorage.removeItem("note")
                  })
  
              }else{
                this.pauseTimer()
                this.ngOnInit2()
                console.log(this.note)
                }
          

          
        }else{
          this.nbreste=this.nbreste+1
          sessionStorage.setItem("nbrest",this.nbreste.toString())
          
          
              if(this.nbreste==this.quizz.nbQuestion){

                let uStr = sessionStorage.getItem("u");
                if (uStr) {
                  this.user = JSON.parse(uStr) as Participant;
                }
                this.resultat.participant=this.user
                this.resultat.quizz=this.quizz
                this.resultat.note=this.note
                console.log(this.note)
                if(this.note>=this.quizz.noteRequise){
                  this.resultat.reussite=true
                }else{
                  this.resultat.reussite=false
                }
                this.serviceResultat.ajouter(this.resultat).subscribe(
                  response=>{
                    this.resultat=response
                    this.pauseTimer()
                    this.router.navigateByUrl("affichediplome/"+this.resultat.idResultat)
                    sessionStorage.removeItem("note")
                  })
  
              }else{
                this.pauseTimer()
                this.ngOnInit2()
                console.log(this.note)
                }
              }




      }else{
        this.nbreste=this.nbreste+1
          sessionStorage.setItem("nbrest",this.nbreste.toString())
          
          
              if(this.nbreste==this.quizz.nbQuestion){

                let uStr = sessionStorage.getItem("u");
                if (uStr) {
                  this.user = JSON.parse(uStr) as Participant;
                }
                this.resultat.participant=this.user
                this.resultat.quizz=this.quizz
                this.resultat.note=this.note
                console.log(this.note)
                if(this.note>=this.quizz.noteRequise){
                  this.resultat.reussite=true
                }else{
                  this.resultat.reussite=false
                }
                this.serviceResultat.ajouter(this.resultat).subscribe(
                  response=>{
                    this.resultat=response
                    this.pauseTimer()
                    this.router.navigateByUrl("affichediplome/"+this.resultat.idResultat)
                    sessionStorage.removeItem("note")
                  })
  
              }else{
                this.pauseTimer()
                this.ngOnInit2()
                console.log(this.note)
                }
              }




    }else{
      this.nbreste=this.nbreste+1
          sessionStorage.setItem("nbrest",this.nbreste.toString())
          
          
              if(this.nbreste==this.quizz.nbQuestion){

                let uStr = sessionStorage.getItem("u");
                if (uStr) {
                  this.user = JSON.parse(uStr) as Participant;
                }
                this.resultat.participant=this.user
                this.resultat.quizz=this.quizz
                this.resultat.note=this.note
                console.log(this.note)
                if(this.note>=this.quizz.noteRequise){
                  this.resultat.reussite=true
                }else{
                  this.resultat.reussite=false
                }
                this.serviceResultat.ajouter(this.resultat).subscribe(
                  response=>{
                    this.resultat=response
                    this.pauseTimer()
                    this.router.navigateByUrl("affichediplome/"+this.resultat.idResultat)
                    sessionStorage.removeItem("note")
                  })
  
              }else{
                this.pauseTimer()
                this.ngOnInit2()
                console.log(this.note)
                }
              }




  }else{
    this.nbreste=this.nbreste+1
          sessionStorage.setItem("nbrest",this.nbreste.toString())
          
          
              if(this.nbreste==this.quizz.nbQuestion){

                let uStr = sessionStorage.getItem("u");
                if (uStr) {
                  this.user = JSON.parse(uStr) as Participant;
                }
                this.resultat.participant=this.user
                this.resultat.quizz=this.quizz
                this.resultat.note=this.note
                console.log(this.note)
                if(this.note>=this.quizz.noteRequise){
                  this.resultat.reussite=true
                }else{
                  this.resultat.reussite=false
                }
                this.serviceResultat.ajouter(this.resultat).subscribe(
                  response=>{
                    this.resultat=response
                    this.pauseTimer()
                    this.router.navigateByUrl("affichediplome/"+this.resultat.idResultat)
                    sessionStorage.removeItem("note")
                  })
  
              }else{
                this.pauseTimer()
                this.ngOnInit2()
                console.log(this.note)
                
                }
              }
  }





saveQ () {
  /*
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
  */
 console.log(this.RQ1)



 this.nbreste=this.nbreste+1
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
    if(this.q.tempsReponse > 0) {
      this.q.tempsReponse--;
    } else if (this.q.tempsReponse === 0){
        this.saveQ2()
      
    }
  },1000)
  
}

pauseTimer() {
  clearInterval(this.interval);
}


}
