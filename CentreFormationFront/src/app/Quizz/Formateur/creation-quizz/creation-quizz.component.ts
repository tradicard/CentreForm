import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creation-quizz',
  templateUrl: './creation-quizz.component.html',
  styleUrls: ['./creation-quizz.component.css']
})
export class CreationQuizzComponent implements OnInit {

  qcu!:string
  qcm!:string

  typeReponse!:string
  question!:string
  reponse!:string
  faux1!:string
  faux2!:string
  faux3!:string
  temps!:string

  constructor(
    private router:Router
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
