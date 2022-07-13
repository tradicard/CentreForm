import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Quizz } from 'src/app/models/quizz';
import { FormateurService } from 'src/app/service/formateur.service';
import { QuizzService } from 'src/app/service/quizz.service';

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

  quizz!:Quizz
  formateur!:Formateur
  idF!:number

  constructor(
    private router:Router
    ,private route:ActivatedRoute, 
    private serviceFormateur:FormateurService, 
    private serviceQuizz:QuizzService) { }

  ngOnInit(): void {
    this.quizz= new Quizz()
  }

  ajoutQuizz()
{
  this.serviceFormateur.getById(this.idF).subscribe
  (
    response=>this.formateur=response 
  )
  this.serviceQuizz.ajouter(this.quizz).subscribe(
    response=> this.router.navigateByUrl('')
  )
}

}
