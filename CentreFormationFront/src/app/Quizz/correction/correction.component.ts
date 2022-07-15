import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Quizz } from 'src/app/models/quizz';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/service/question.service';
import { QuizzService } from 'src/app/service/quizz.service';
import { ReponseService } from 'src/app/service/reponse.service';
import { ResultatService } from 'src/app/service/resultat.service';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {

  quizz!:Quizz
  quests!:Question[]
  reponses!:Reponse[]
  q!:Question
  nbreste!:number
  constructor(private route:ActivatedRoute,private serviceQuizz:QuizzService,
    private serviceQuestion:QuestionService, private serviceReponse:ReponseService, private serviceResultat:ResultatService) { }

  ngOnInit(): void {
  }

  recuperer() {
    let idQuizz=Number(sessionStorage.getItem("idQuizz"))
    this.serviceQuizz.getById(idQuizz).subscribe(
      response=>{
        this.quizz=response;
        this.serviceQuestion.getAllbyquizz(this.quizz.idQuizz).subscribe(
          response=>{
            this.quests=response
            this.q=this.quests[this.nbreste]

            this.serviceReponse.getAllbyquest(this.q.idQuestion).subscribe(
              response=>{
                this.reponses=response

              })
      }
    )
  })
}
}
