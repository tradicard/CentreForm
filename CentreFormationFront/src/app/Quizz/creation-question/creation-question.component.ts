import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-creation-question',
  templateUrl: './creation-question.component.html',
  styleUrls: ['./creation-question.component.css']
})
export class CreationQuestionComponent implements OnInit {

  question!:string

  typeReponse1:boolean=false
  typeReponse2:boolean=false
  typeReponse3:boolean=false
  typeReponse4:boolean=false
  
  reponse1!:string
  reponse2!:string
  reponse3!:string
  reponse4!:string
  temps!:string

  idQuizz!:number



  constructor(
    private router:Router
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.typeReponse1)
    console.log(this.reponse1)
    console.log(this.typeReponse2)
    console.log(this.reponse2)
    console.log(this.typeReponse3)
    console.log(this.reponse3)
    console.log(this.typeReponse4)
    console.log(this.reponse4)
    if (this.typeReponse1 === false) {
      console.log("ok")
    }
  }
}
