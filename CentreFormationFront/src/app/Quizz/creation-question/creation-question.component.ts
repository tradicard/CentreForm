import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private router:Router
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  save() {
    
  }
}
