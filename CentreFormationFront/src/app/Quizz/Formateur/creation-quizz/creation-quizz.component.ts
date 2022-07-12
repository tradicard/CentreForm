import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creation-quizz',
  templateUrl: './creation-quizz.component.html',
  styleUrls: ['./creation-quizz.component.css']
})
export class CreationQuizzComponent implements OnInit {

  typeReponse!:string
  question!:string
  qcu!:string
  qcm!:string

  constructor(
    private router:Router
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
