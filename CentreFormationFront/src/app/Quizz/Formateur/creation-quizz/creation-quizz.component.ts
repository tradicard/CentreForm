import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { Question } from 'src/app/models/question';
import { Quizz } from 'src/app/models/quizz';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormationService } from 'src/app/service/formation.service';
import { QuizzService } from 'src/app/service/quizz.service';

@Component({
  selector: 'app-creation-quizz',
  templateUrl: './creation-quizz.component.html',
  styleUrls: ['./creation-quizz.component.css']
})
export class CreationQuizzComponent implements OnInit {
  user!:Formateur

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
  noteReussite!:number
  nbQuestion!:number
  formation!:Formation
 

  constructor(
    private router:Router
    ,private route:ActivatedRoute, 
    private serviceFormateur:FormateurService,
    private serviceFormation:FormationService, 
    private serviceQuizz:QuizzService) { }

  ngOnInit(): void {
    this.quizz= new Quizz()
    this.recupererF()
  }
  recupererF(){
    let uStr = sessionStorage.getItem("u");
  if (uStr) {
    this.user = JSON.parse(uStr) as Formateur;
  }
    this.serviceFormation.getByIdFormateur(this.user.id).subscribe(
      response=>this.formation=response
    )
  }

  ajoutQuizz()
{
  let uStr = sessionStorage.getItem("u");
  if (uStr) {
    this.user = JSON.parse(uStr) as Formateur;
  }
  this.quizz.formateur=this.user
  this.quizz.formation=this.formation


  this.serviceQuizz.ajouter(this.quizz).subscribe(
    response=> {
      this.quizz=response
      sessionStorage.setItem("nbquestion",this.quizz.nbQuestion.toString())
      sessionStorage.setItem("nbrest","0")

      this.router.navigateByUrl('creerQuestion/'+this.quizz.idQuizz)}

      
  )
}

ajoutQuestion()
{
  this.router.navigateByUrl('creerQuestion')
}

}
